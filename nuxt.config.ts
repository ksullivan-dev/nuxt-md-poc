// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://api-dev.mousedining.com", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // TODO: we can likely trim out unnecessary things in this file
          additionalData: "@import '@/assets/scss/init.scss';",
        },
      },
    },
  },
  // TODO: once app is built, we can only globally import the necessary things in favor of localized imports
  css: ["@/assets/scss/style.scss"],

  modules: [
    // TODO: currently only using this for click outside. Confirm tree-shake or other helpful modules
    "@vueuse/nuxt",
    "dayjs-nuxt",
  ],

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
