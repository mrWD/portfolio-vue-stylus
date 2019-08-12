const webpack = require('webpack');
const env = require('dotenv').config().parsed;
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const envKeys = Object.keys(env).reduce((result, currentKey) => ({ 
  ...result,
  [currentKey]: JSON.stringify(env[currentKey]),
}), {});

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['pug-loader']
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(?:styl|css)$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(jpg|jpeg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envKeys
    }),
    new HTMLWebpackPlugin({
      template: './src/index.pug'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src/')
    },
  }
}
