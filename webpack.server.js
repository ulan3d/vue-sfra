const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var glob = require("glob");

module.exports = {
  target: 'node',
  mode: 'development',//'production',
  devtool: 'cheap-module-eval-source-map',
  entry: glob.sync("./cartridges/vue_sfra/cartridge/components/*.vue").reduce((acc, el) => {
      let name = el.split('/').pop().replace(/\.[^.]+$/, '');
      acc[name] = el;
      return acc;
  }, {}),
  output: {
    libraryTarget: 'commonjs2',
    libraryExport: "default",
    path: path.resolve('./cartridges/vue_sfra/cartridge/components/dist'),
    filename: '[name].js'
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
