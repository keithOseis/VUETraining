import pkg from './package.json'

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~assests/style/app.styl"],

  modules: ["@nuxtjs/axios", "@nuxt/content", "@nuxtjs/vuetify"],
  axios: {
    //proxyHeaders: false
    baseURL: 'htpp://vmstation.gfgm.de'
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {}
};
