var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {app: './src/app.js' },
  output: {filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map' },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader',options: {
        presets: ['stage-0','react','es2015'],
        plugins: ["transform-decorators-legacy","transform-class-properties"]
    } },
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]'  },
   {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader?cacheDirectory=true',
      options: {
        name: '[sha512:hash:hex].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader?cacheDirectory=true',
      options: {
        bypassOnDebug: true,
        mozjpeg: {
          progressive: true
        },
        gifsicle: {
          interlaced: true
        },
        optipng: {
          optimizationLevel: 7
        }
      }
    }
  ]
}
    ]
  }
}


