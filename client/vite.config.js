import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

function jsxInJs() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    transform(code, id) {
      const file = id.split('?')[0];
      if (!/[/\\]src[/\\].*\.js$/.test(file)) return null;
      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_PROXY || 'http://localhost:5000';

  return {
    plugins: [jsxInJs(), react()],
    server: {
      port: 3000,
      strictPort: false,
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: 4173,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 900,
    },
  };
});
