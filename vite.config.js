import { defineConfig } from 'vite'
import { resolve } from 'path'
import path from 'path'

// Get absolute path to views
const absoluteViews = path.resolve(__dirname, 'views')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        views: absoluteViews 
      }
    } 
  }
})