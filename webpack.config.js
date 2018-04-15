const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    profile: './src/profile.js',
    exit: './src/exit.js',
    common: './src/common.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Профиль пользователя',
      filename: 'profile.html',
      template: 'src/profile.html',
      chunks: ['common', 'profile']
    }),
    new HtmlWebpackPlugin({
      title: 'Выход',
      filename: 'exit.html',
      template: 'src/exit.html',
      chunks: ['common', 'exit']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles/[name].css",
      
      //chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }  
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }  
          }
        ]
      },
/*       {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.html$/,
        use: [ 'file-loader?name=[name].[ext]' ],
        exclude: path.resolve(__dirname, 'src/index.html')
      }, */
    ]
  }
};