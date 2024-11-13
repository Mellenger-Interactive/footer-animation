import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es5',
    lib: {
      entry: 'src/main.ts', // Path to your entry TypeScript file
      name: 'MellengerAnimation', // The global name for your component
      fileName: 'main', // The output file name
      formats: ['umd'], // Generate ES module format (this is best for CDN use)
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
});