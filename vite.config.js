import { resolve } from 'path';
import { defineConfig } from 'vite';
import { readdirSync } from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Include the main HTML file
        // Include all HTML files in the 'views' directory
        ...Object.fromEntries(
          readdirSync(resolve(__dirname, 'views'))
            .filter((file) => file.endsWith('.html'))
            .map((file) => [file.replace('.html', ''), resolve(__dirname, `views/${file}`)])
        ),
      },
    },
  },
});
