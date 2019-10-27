module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/revue/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.yaml$/,
          use: 'js-yaml-loader',
        },
      ],
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
