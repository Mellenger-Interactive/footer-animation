import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/mellenger-footer-animation.ts', // Path to your entry TypeScript file
      name: 'MellengerFooterAnimation', // The global name for your component
      fileName: 'mellenger-footer-animation', // The output file name
      formats: ['es'], // Generate ES module format (this is best for CDN use)
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