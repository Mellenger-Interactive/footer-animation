import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  optimizeDeps: {
    include: ['poly-decomp'], // Ensure `poly-decomp` is pre-bundled
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: 'src/main.ts', // Path to your entry TypeScript file
      name: 'MellengerAnimation', // The global name for your component
      fileName: 'main', // The output file name
      formats: ['es'], // Generate UMD module format
    },
  },
  esbuild: false, // Disable esbuild
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*'],
      exclude: 'node_modules/**' // Exclude node_modules from Babel processing
    })
  ]
});
