module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'training',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assests/style/app.styl'
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
  ]
  axios: {
    //proxyHeaders: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
  }

}

