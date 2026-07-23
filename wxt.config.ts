import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  runner: {
    disabled: false,
    binaries: {
      chrome: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
    }
  }
});
