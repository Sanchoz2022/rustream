//! Parse YouTube cookies pasted by a user and render them for our own
//! requests (a `Cookie` header) and for yt-dlp (a Netscape cookies file).
//!
//! Accepted input: a raw header string (`a=b; c=d`, optionally prefixed with
//! `Cookie:`), a Cookie-Editor / EditThisCookie JSON export, or a Netscape
//! `cookies.txt`.

use anyhow::{anyhow, Result};
use serde::Deserialize;

/// Cookies YouTube needs for an authenticated session. Anything else from the
/// export (analytics, consent, unrelated Google services) is dropped.
const KEEP: &[&str] = &[
    "SID",
    "HSID",
    "SSID",
    "APISID",
    "SAPISID",
    "LOGIN_INFO",
    "SIDCC",
    "PREF",
    "__Secure-1PSID",
    "__Secure-3PSID",
    "__Secure-1PAPISID",
    "__Secure-3PAPISID",
    "__Secure-1PSIDTS",
    "__Secure-3PSIDTS",
    "__Secure-1PSIDCC",
    "__Secure-3PSIDCC",
];

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Cookie {
    pub name: String,
    pub value: String,
}

#[derive(Deserialize)]
struct JsonCookie {
    name: String,
    value: String,
    #[serde(default)]
    domain: Option<String>,
}

/// Parse and filter user input. Fails when no SAPISID-style cookie is present,
/// because without it requests are anonymous.
pub fn parse(input: &str) -> Result<Vec<Cookie>> {
    let input = input.trim();
    if input.is_empty() {
        return Err(anyhow!("Пустой ввод"));
    }

    let raw = if input.starts_with('[') || input.starts_with('{') {
        parse_json(input)?
    } else if input.lines().any(is_netscape_line) {
        parse_netscape(input)
    } else {
        parse_header(input)
    };

    let mut cookies: Vec<Cookie> = Vec::new();
    for cookie in raw {
        if !KEEP.contains(&cookie.name.as_str()) || cookie.value.is_empty() {
            continue;
        }
        // Exports contain the same name for several domains; the first one
        // (youtube.com is listed before google.com) wins.
        if !cookies.iter().any(|existing| existing.name == cookie.name) {
            cookies.push(cookie);
        }
    }

    if sapisid(&cookies).is_none() {
        let found = if cookies.is_empty() {
            "ни одного подходящего cookie".to_string()
        } else {
            cookies
                .iter()
                .map(|cookie| cookie.name.as_str())
                .collect::<Vec<_>>()
                .join(", ")
        };
        return Err(anyhow!(
            "В экспорте нет SAPISID / __Secure-3PAPISID (найдено: {found}). \
             Экспорт нужно делать на youtube.com или music.youtube.com, уже войдя в аккаунт."
        ));
    }
    Ok(cookies)
}

fn parse_json(input: &str) -> Result<Vec<Cookie>> {
    let items: Vec<JsonCookie> = if input.starts_with('{') {
        // Some extensions wrap the list: {"cookies": [...]}.
        #[derive(Deserialize)]
        struct Wrapped {
            cookies: Vec<JsonCookie>,
        }
        serde_json::from_str::<Wrapped>(input)
            .map_err(|error| anyhow!("Некорректный JSON: {error}"))?
            .cookies
    } else {
        serde_json::from_str(input).map_err(|error| anyhow!("Некорректный JSON: {error}"))?
    };

    // Одинаковые имена встречаются и на .google.com, и на .youtube.com.
    // Для music.youtube.com предпочтительнее youtube-версия, поэтому она
    // идёт первой и выигрывает дедупликацию ниже.
    let mut items: Vec<(bool, Cookie)> = items
        .into_iter()
        .filter(|item| item.domain.as_deref().is_none_or(is_google_domain))
        .map(|item| {
            let on_youtube = item
                .domain
                .as_deref()
                .is_some_and(|domain| !is_google_domain(domain) || domain.contains("youtube"));
            (
                on_youtube,
                Cookie {
                    name: item.name.trim().to_string(),
                    value: item.value.trim().to_string(),
                },
            )
        })
        .collect();
    items.sort_by_key(|(on_youtube, _)| !*on_youtube);
    Ok(items.into_iter().map(|(_, cookie)| cookie).collect())
}

fn is_netscape_line(line: &str) -> bool {
    line.split('\t').count() >= 7
}

fn parse_netscape(input: &str) -> Vec<Cookie> {
    let mut items: Vec<(bool, Cookie)> = input
        .lines()
        .filter(|line| !line.starts_with('#') || line.starts_with("#HttpOnly_"))
        .filter_map(|line| {
            let line = line.strip_prefix("#HttpOnly_").unwrap_or(line);
            let fields: Vec<&str> = line.split('\t').collect();
            if fields.len() < 7 || !is_google_domain(fields[0]) {
                return None;
            }
            Some((
                fields[0].contains("youtube"),
                Cookie {
                    name: fields[5].trim().to_string(),
                    value: fields[6].trim().to_string(),
                },
            ))
        })
        .collect();
    items.sort_by_key(|(on_youtube, _)| !*on_youtube);
    items.into_iter().map(|(_, cookie)| cookie).collect()
}

fn parse_header(input: &str) -> Vec<Cookie> {
    let input = input
        .strip_prefix("Cookie:")
        .or_else(|| input.strip_prefix("cookie:"))
        .unwrap_or(input);
    input
        .split(';')
        .filter_map(|part| {
            let (name, value) = part.split_once('=')?;
            Some(Cookie {
                name: name.trim().to_string(),
                value: value.trim().trim_matches('"').to_string(),
            })
        })
        .collect()
}

/// Google держит `SAPISID`/`SID` на `.google.com`, а `__Secure-3P*` — на
/// `.youtube.com`. Фильтр по одному youtube.com выбрасывал половину сессии,
/// поэтому принимаем оба домена: список KEEP и так ограничен авторизацией.
fn is_google_domain(domain: &str) -> bool {
    let domain = domain.trim().trim_start_matches('.');
    domain == "youtube.com"
        || domain.ends_with(".youtube.com")
        || domain == "google.com"
        || domain.ends_with(".google.com")
        || domain == "googleusercontent.com"
        || domain.ends_with(".googleusercontent.com")
}

/// Value used for the `SAPISIDHASH` authorization header.
pub fn sapisid(cookies: &[Cookie]) -> Option<&str> {
    ["SAPISID", "__Secure-3PAPISID", "__Secure-1PAPISID"]
        .iter()
        .find_map(|name| {
            cookies
                .iter()
                .find(|cookie| cookie.name == *name)
                .map(|cookie| cookie.value.as_str())
        })
}

pub fn to_header(cookies: &[Cookie]) -> String {
    cookies
        .iter()
        .map(|cookie| format!("{}={}", cookie.name, cookie.value))
        .collect::<Vec<_>>()
        .join("; ")
}

/// Inverse of [`to_header`] for values we stored ourselves.
pub fn from_header(header: &str) -> Vec<Cookie> {
    parse_header(header)
}

pub fn to_netscape(cookies: &[Cookie]) -> String {
    let mut text = String::from("# Netscape HTTP Cookie File\n");
    // Far-future expiry: yt-dlp drops expired cookies, and the real expiry
    // is unknown for header-string input.
    for cookie in cookies {
        text.push_str(&format!(
            ".youtube.com\tTRUE\t/\tTRUE\t2147483647\t{}\t{}\n",
            cookie.name, cookie.value
        ));
    }
    text
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_header_string_and_filters_noise() {
        let cookies =
            parse("Cookie: VISITOR_INFO1_LIVE=x; SAPISID=abc/def; SID=s1; YSC=y").unwrap();
        assert_eq!(to_header(&cookies), "SAPISID=abc/def; SID=s1");
        assert_eq!(sapisid(&cookies), Some("abc/def"));
    }

    #[test]
    fn parses_cookie_editor_json_and_skips_other_domains() {
        let json = r#"[
            {"domain": ".youtube.com", "name": "__Secure-3PAPISID", "value": "p3"},
            {"domain": ".google.com", "name": "SID", "value": "google"},
            {"domain": ".youtube.com", "name": "SID", "value": "yt"},
            {"domain": ".youtube.com", "name": "LOGIN_INFO", "value": "li"}
        ]"#;
        let cookies = parse(json).unwrap();
        assert_eq!(
            to_header(&cookies),
            "__Secure-3PAPISID=p3; SID=yt; LOGIN_INFO=li"
        );
        assert_eq!(sapisid(&cookies), Some("p3"));
    }

    #[test]
    fn parses_netscape_file() {
        let text = "# Netscape HTTP Cookie File\n\
            .youtube.com\tTRUE\t/\tTRUE\t1999999999\tSAPISID\tzzz\n\
            #HttpOnly_.youtube.com\tTRUE\t/\tTRUE\t1999999999\tHSID\thhh\n\
            .example.com\tTRUE\t/\tTRUE\t1999999999\tSID\tbad\n";
        let cookies = parse(text).unwrap();
        assert_eq!(to_header(&cookies), "SAPISID=zzz; HSID=hhh");
    }

    #[test]
    fn rejects_input_without_sapisid() {
        assert!(parse("SID=1; HSID=2").is_err());
        assert!(parse("   ").is_err());
        assert!(parse("[not json").is_err());
    }

    #[test]
    fn parses_cookie_editor_export_with_google_domains() {
        // Реальный экспорт Cookie-Editor: SAPISID лежит на .google.com,
        // __Secure-3PAPISID — на .youtube.com. Раньше google-домены
        // отбрасывались, и подключение падало с «не найден SAPISID».
        let text = r#"[
          {"domain":".google.com","expirationDate":1793473639.5,"hostOnly":false,
           "httpOnly":true,"name":"SAPISID","path":"/","sameSite":"no_restriction",
           "secure":true,"session":false,"storeId":"0","value":"sapi"},
          {"domain":".youtube.com","expirationDate":1793473639.5,"hostOnly":false,
           "httpOnly":true,"name":"__Secure-3PAPISID","path":"/","sameSite":"none",
           "secure":true,"session":false,"storeId":"0","value":"p3"},
          {"domain":".youtube.com","expirationDate":1793473639.5,"hostOnly":false,
           "httpOnly":true,"name":"SID","path":"/","sameSite":"none",
           "secure":true,"session":false,"storeId":"0","value":"sid"}
        ]"#;
        let cookies = parse(text).unwrap();
        assert_eq!(sapisid(&cookies), Some("sapi"));
        assert!(cookies.iter().any(|c| c.name == "__Secure-3PAPISID"));
        assert!(cookies.iter().any(|c| c.name == "SID"));
    }

    #[test]
    fn netscape_roundtrip_contains_all_cookies() {
        let cookies = parse("SAPISID=a; SID=b").unwrap();
        let file = to_netscape(&cookies);
        assert!(file.contains("\tSAPISID\ta\n"));
        assert!(file.contains("\tSID\tb\n"));
        assert_eq!(from_header(&to_header(&cookies)), cookies);
    }
}
