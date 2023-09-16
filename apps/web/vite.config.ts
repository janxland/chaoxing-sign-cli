import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  server: {
    port: 80,
    proxy: {
      '/api': {
        target: 'http://api.chaoxing.roginx.ink/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  base: '/',
  build: {
    sourcemap: false
  },
  optimizeDeps: { include: ['crypto-js'] }
});
