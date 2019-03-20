let path = require('path');
let projectRoot = path.resolve(__dirname, './');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let glob = require("glob");

module.exports = {
  mode: 'development',//'production',
  devtool: 'source-map',
  entry: glob.sync("./cartridges/vue_sfra/cartridge/components/*.js").reduce((acc, el) => {
    let name = el.split('/').pop().replace(/\.[^.]+$/, '');
    acc[name] = el;
    return acc;
  }, {}),
  output: {
    path: path.resolve('./cartridges/vue_sfra/cartridge/static/default/js'),
    filename: 'vue-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          presets: ['babel-preset-env'],
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

