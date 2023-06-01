// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
    "/spa": { ssr: false },
    "/static": { static: true },
    // Stale while revalidate
    "/swr": { swr: true },
    "/blog": { ssr: false },
    "/blog/**": { isr: false },

    // Default is Universal Runs on Server side
  },
});
