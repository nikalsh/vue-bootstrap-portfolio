// vue.config.js
module.exports = {
    // options...

  baseUrl: process.env.NODE_ENV === 'production'
        ? '/portfolio/'
        : '/',

  publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio/'
        : '/'

}
