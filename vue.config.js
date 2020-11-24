const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tpu-test/'
    : '/',
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve('./src/stylus/fonts.styl'),
          path.resolve('./src/stylus/variables.styl'),
        ],
      },
    },
  },
};
