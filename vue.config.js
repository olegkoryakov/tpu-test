const path = require('path');

module.exports = {
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
