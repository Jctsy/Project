// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/node_modules/.pnpm/vite@5.4.10_sass-embedded@1.80.6/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_sass-embedded@1.80.6__vue@3.5.12/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/node_modules/.pnpm/unplugin-auto-import@0.18.3_@nuxt+kit@3.14.159_rollup@4.24.4__@vueuse+core@9.13.0_vue@3.5.12__rollup@4.24.4/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_@nuxt+kit@3.14.159_rollup@4.24.4__rollup@4.24.4_vue@3.5.12/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_@nuxt+kit@3.14.159_rollup@4.24.4__rollup@4.24.4_vue@3.5.12/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///F:/NcGroup/Web/vueproject/demoV3/Vue3_big_thing/Vue3-big-event-admin/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxOY0dyb3VwXFxcXFdlYlxcXFx2dWVwcm9qZWN0XFxcXGRlbW9WM1xcXFxWdWUzX2JpZ190aGluZ1xcXFxWdWUzLWJpZy1ldmVudC1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcTmNHcm91cFxcXFxXZWJcXFxcdnVlcHJvamVjdFxcXFxkZW1vVjNcXFxcVnVlM19iaWdfdGhpbmdcXFxcVnVlMy1iaWctZXZlbnQtYWRtaW5cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L05jR3JvdXAvV2ViL3Z1ZXByb2plY3QvZGVtb1YzL1Z1ZTNfYmlnX3RoaW5nL1Z1ZTMtYmlnLWV2ZW50LWFkbWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pXG4gIF0sXG4gIGJhc2U6ICcvJyxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gIH0sXG59KVxuXG5cblxuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksU0FBUyxlQUFlLFdBQVc7QUFFL2EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRWhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBUHlOLElBQU0sMkNBQTJDO0FBVTlTLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
