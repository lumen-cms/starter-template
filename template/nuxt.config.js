module.exports = {

  env: {
    // Important! change this to your endpoint (https://github.com/lumen-cms/lumen-graphcool)
    GRAPHQL_ALIAS: 'GRAPH_COOL_ALIAS',
    GRAPHQL_SUBSRIPTION: 'SUBSCRIPTION_API',
    GRAPH_FILE_API: 'GRAPH_COOL_FILE_API'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // modules
  modules: ['lumen-cms'],
  'lumen-cms':{ 
    // your configuration

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
