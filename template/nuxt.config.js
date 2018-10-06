module.exports = {

  env: {
    // graph.cool backend variables (https://github.com/lumen-cms/lumen-graphcool)
    GRAPHQL_PROJECT_ID: '{{projectId}}',
    COPYRIGHT: 'Lumen CMS'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'},
      {hid: 'description', name: 'description', content: '{{escape description }}'},
      {hid: 'robots', name: 'robots', content: 'noindex,nofollow'} // change this before going to production
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.de,fetch,IntersectionObserver'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  // modules
  modules: ['lumen-cms'],
  'lumen-cms': {
    apollo: {
      clientConfigs: {
        default: {
          httpEndpoint: 'https://api.graph.cool/simple/v1/{{projectId}}',
          wsEndpoint: null
        }
      }
    }
    // your configuration
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
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
