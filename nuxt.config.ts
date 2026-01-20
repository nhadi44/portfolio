// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  app: {
    head: {
      title: 'Hadi Nurhidayat | Fullstack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Hadi Nurhidayat - Fullstack Developer with 4+ years of experience in Next.js, Node.js, Laravel, Nuxt.js, and Spring Boot' },
        { name: 'author', content: 'Hadi Nurhidayat' },
        { property: 'og:title', content: 'Hadi Nurhidayat | Fullstack Developer' },
        { property: 'og:description', content: 'Fullstack Developer with 4+ years of experience building scalable web applications' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['@/assets/css/main.css'],

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
  }
})
