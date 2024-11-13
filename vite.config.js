import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    target: 'es5',
    lib: {
      entry: 'src/main.ts', // Path to your entry TypeScript file
      name: 'MellengerAnimation', // The global name for your component
      fileName: 'main', // The output file name
      formats: ['es'], // Generate UMD module format
    },
    rollupOptions: {
      external: ['poly-decomp'], // Externalize any dependencies (e.g., poly-decomp)
      output: {
        globals: {
          'poly-decomp': 'decomp', // Define the global name for external libraries
        },
      },
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