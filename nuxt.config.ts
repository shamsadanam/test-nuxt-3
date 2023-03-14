// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: { 
      title: "Test Nuxt 3",
      meta: [
        {
          name: "description",
          content: "This is for testing Nuxt 3 features",
        },
      ],
      link: [
        {
          rel: "stylesheet", 
          href: "/css/bootstrap.min.css",
        },
      ],
    },
    
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/sass/global.scss";',
            },
        },
    },
},
  modules: [["nuxt-swiper", {
    styleLang: 'css',
  }], "@pinia/nuxt"],
  css: ["~/assets/sass/style.scss"],
  runtimeConfig: {
    // apiUrl: process.env.API_URL || "http://localhost:3344",
    public: {
      apiUrl:
        process.env.API_URL || "https://dev.appinionbd.com/qfl-ecom-admin/api",
    },
  },
});
