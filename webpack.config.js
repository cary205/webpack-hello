const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/app.js',
    pageTwo: './src/app.js'
  },
  output: {
    //filename: 'bundle.js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  //node: false,
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    // alias: {
    //   //default: runtime-only build(vue.runtime.esm.js)
    //   'vue$': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    // },
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: {
    vue: 'Vue'
  }
};