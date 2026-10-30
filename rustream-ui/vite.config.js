import { defineConfig } from 'vite'

// Dev server: `npm run dev` proxies API calls to a running rustream instance.
// Point RUSTREAM_API at another host when it is not local.
const target = process.env.RUSTREAM_API || 'http://127.0.0.1:4533'

export default defineConfig({
  base: '/static/',
  build: {
    outDir: '../static',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    proxy: {
      '/rest': { target, changeOrigin: true },
      '/api': { target, changeOrigin: true },
      '/stream': { target, changeOrigin: true }
    }
  }
})
