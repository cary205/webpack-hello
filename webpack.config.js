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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};