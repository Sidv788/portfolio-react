import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue(), vueJsx()],
  build: {
    outDir: 'dist', // Specify the output directory for your built files
    minify: true, // Minify the code for production
    sourcemap: false // Disable sourcemaps in production
  }
});