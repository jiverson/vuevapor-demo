import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Enable Vapor Mode at the compiler level
          mode: 'module'
        }
      }
    })
  ],
  esbuild: {
    target: 'es2020',
  },
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
