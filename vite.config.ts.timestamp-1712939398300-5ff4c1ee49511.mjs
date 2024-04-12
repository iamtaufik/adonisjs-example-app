// vite.config.ts
import { defineConfig } from 'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.7/node_modules/vite/dist/node/index.js'
import { getDirname } from 'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/node_modules/.pnpm/@adonisjs+core@6.5.0_@adonisjs+assembler@7.4.0_@vinejs+vine@1.8.0_edge.js@6.0.2/node_modules/@adonisjs/core/build/src/helpers/main.js'
import inertia from 'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/node_modules/.pnpm/@adonisjs+inertia@1.0.0-23_@adonisjs+core@6.5.0_@adonisjs+session@7.3.0_@adonisjs+vite@3.0.0-11_edge.js@6.0.2/node_modules/@adonisjs/inertia/build/src/plugins/vite.js'
import react from 'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.8/node_modules/@vitejs/plugin-react/dist/index.mjs'
import adonisjs from 'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/node_modules/.pnpm/@adonisjs+vite@3.0.0-11_@adonisjs+core@6.5.0_@adonisjs+shield@8.1.1_edge.js@6.0.2_vite@5.2.8/node_modules/@adonisjs/vite/build/src/client/main.js'
var __vite_injected_original_import_meta_url =
  'file:///C:/Users/ASUS/Desktop/Web-Programing/Fullstack/adonis/example-app/vite.config.ts'
var vite_config_default = defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.tsx' } }),
    react(),
    adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] }),
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`,
    },
  },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBU1VTXFxcXERlc2t0b3BcXFxcV2ViLVByb2dyYW1pbmdcXFxcRnVsbHN0YWNrXFxcXGFkb25pc1xcXFxleGFtcGxlLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQVNVU1xcXFxEZXNrdG9wXFxcXFdlYi1Qcm9ncmFtaW5nXFxcXEZ1bGxzdGFja1xcXFxhZG9uaXNcXFxcZXhhbXBsZS1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FTVVMvRGVza3RvcC9XZWItUHJvZ3JhbWluZy9GdWxsc3RhY2svYWRvbmlzL2V4YW1wbGUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGdldERpcm5hbWUgfSBmcm9tICdAYWRvbmlzanMvY29yZS9oZWxwZXJzJ1xuaW1wb3J0IGluZXJ0aWEgZnJvbSAnQGFkb25pc2pzL2luZXJ0aWEvY2xpZW50J1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGFkb25pc2pzIGZyb20gJ0BhZG9uaXNqcy92aXRlL2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2luZXJ0aWEoeyBzc3I6IHsgZW5hYmxlZDogdHJ1ZSwgZW50cnlwb2ludDogJ2luZXJ0aWEvYXBwL3Nzci50c3gnIH0gfSksIHJlYWN0KCksIGFkb25pc2pzKHsgZW50cnlwb2ludHM6IFsnaW5lcnRpYS9hcHAvYXBwLnRzeCddLCByZWxvYWQ6IFsncmVzb3VyY2VzL3ZpZXdzLyoqLyouZWRnZSddIH0pXSxcblxuICAvKipcbiAgICogRGVmaW5lIGFsaWFzZXMgZm9yIGltcG9ydGluZyBtb2R1bGVzIGZyb21cbiAgICogeW91ciBmcm9udGVuZCBjb2RlXG4gICAqL1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke2dldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKX0vaW5lcnRpYS9gLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWSxTQUFTLG9CQUFvQjtBQUNsYSxTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUpvTyxJQUFNLDJDQUEyQztBQU0xUyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLE1BQU0sWUFBWSxzQkFBc0IsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxhQUFhLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNcEwsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLFdBQVcsd0NBQWUsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
