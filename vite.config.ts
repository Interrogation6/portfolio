import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',             // <-- repo name
  build: { outDir: 'docs' },        // <-- output where Pages can serve from

  server: {
    host: true,                 // bind 0.0.0.0 (WAN/LAN visible)
    port: 5173,                 // <-- put YOUR forwarded port here
    strictPort: true,
    // Optional: HMR over WAN. If it gives you trouble, you can skip this.
    hmr: {
      host: "177.182.7.111",
      clientPort: 5173,         // same as server.port
      protocol: "ws"
    }
  },

  preview: {
    host: true,                 // bind 0.0.0.0
    port: 4173,                 // or the forwarded port if you prefer preview
    strictPort: true
  }
})
