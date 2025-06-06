import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    "process.env.REACT_APP_FIREBASE_API_KEY" :JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY)
  },
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  },

})
