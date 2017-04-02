var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    //loaders
    module: {
        loaders: [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['stage-0','react','es2015'],
        plugins: ["transform-decorators-legacy","transform-class-properties"]
    }
  },
  {
    test: /\.css$/,
    loaders: [ 'style-loader', 'css-loader' ],  
  },
  {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            },
            
            {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
    {
      loader: 'file-loader',
      options: {
        query: {
          name:'assets/[name].[ext]'
        }
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          }
        }
      }
    }]
  },

  
]
    }
};

