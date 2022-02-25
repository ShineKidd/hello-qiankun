const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = {
        name: `${name}-[name]`,
        type:  'umd',
    }
    config.output.globalObject = 'window';
    return config;
  },

  devServer: (_) => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;
    return config;
  },
};