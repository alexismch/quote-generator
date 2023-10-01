import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
   cacheDir: '../node_modules/.vite/front',

   server: {
      port: 4200,
      host: 'localhost',
   },

   preview: {
      port: 4300,
      host: 'localhost',
   },

   plugins: [react(), nxViteTsPaths()],

   // Uncomment this if you are using workers.
   // worker: {
   //  plugins: [ nxViteTsPaths() ],
   // },
});
