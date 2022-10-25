/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#000000',
              '@menu-item-active-bg': '#f5f5f7',
              '@menu-highlight-color': '#f5f5f7',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
