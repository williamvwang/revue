module.exports = {
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
