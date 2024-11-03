import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'CookieWidget',
      fileName: (format) => `cookie-widget.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false,  // CSS'i JavaScript dosyasına dahil eder
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});
