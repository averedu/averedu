import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // 이클립스 vue 빌드 경로
    outDir: "../../webapp/",
  }, 
  server: {
    // vue 포트 설정
    port : 8050,
    proxy: {
      // vue에서 axios 통신 시 url 앞에 restApi 사용 -> 백단 포트로 연동
      "/restApi": "http://localhost:8080",
    },
  },
})
