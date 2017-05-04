const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
      lib: './src/lib.js',
      consumer: './src/consumer.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ["env", {
                  "targets": {
                    "browsers": [
                      "ie >= 9"
                    ]
                  }
                }]
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'lib'
      })
    ]
  };