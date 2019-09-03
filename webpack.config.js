const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  //node: false,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    },
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};