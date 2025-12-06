// Simple build script for Vercel
import { build } from 'vite'

await build({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  }
})