module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '多多达人机器人',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-min.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  * 
  */
  plugins: ['~plugins/elementUI','~plugins/mintUI'],
 	store: true,
  build: {
  	 vendor: ['axios','element-ui','mint-ui']
//	 env: require('./prod.env'),
//  index: path.resolve(__dirname, '../dist/index.html'),
//  assetsRoot: path.resolve(__dirname, '../dist'),
//  assetsSubDirectory: 'statics',
//  assetsPublicPath: './'
    /*
    ** Run ESLint on save
    */
//  extend (config, ctx) {
//    if (ctx.dev && ctx.isClient) {
//      config.module.rules.push({
//        enforce: 'pre',
//        test: /\.(js|vue)$/,
//        loader: 'eslint-loader',
//        exclude: /(node_modules)/
//      })
//    }
//  }
//modules: [
//    '@nuxtjs/axios',
//    '@nuxtjs/proxy'
//],
//proxy: [
//    [
//      '/api', 
//      { 
//        target: 'http://192.168.1.35/aybcAdmin/public/index.php', 
//        pathRewrite: { '^/api' : '/api' }
//      }
//  ]
//]
  }
}
