const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    profile: './src/profile.js',
    history: './src/history.js',
    login: './src/login.js',
    logout: './src/logout.js',
    card: './src/card.js',
    registration: './src/registration.js',
    appointment: './src/appointment.js',
    success: './src/success.js',
    common: './src/common.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
/*     new HtmlWebpackPlugin(), */
    new HtmlWebpackPlugin({
      title: 'Профиль пользователя',
      filename: 'index.html',
      template: 'src/profile.html',
      chunks: ['common', 'profile']
    }),
    new HtmlWebpackPlugin({
      title: 'История Болезни',
      filename: 'history.html',
      template: 'src/history.html',
      chunks: ['common', 'history']
    }),
    new HtmlWebpackPlugin({
      title: 'Вход',
      filename: 'login.html',
      template: 'src/login.html',
      chunks: ['common', 'login']
    }),
    new HtmlWebpackPlugin({
      title: 'Выход',
      filename: 'logout.html',
      template: 'src/logout.html',
      chunks: ['common', 'logout']
    }),
    new HtmlWebpackPlugin({
      title: 'Ввод номера карты',
      filename: 'card.html',
      template: 'src/card.html',
      chunks: ['common', 'card']
    }),
    new HtmlWebpackPlugin({
      title: 'Регистрация',
      filename: 'registration.html',
      template: 'src/registration.html',
      chunks: ['common', 'registration']
    }),
    new HtmlWebpackPlugin({
      title: 'Запись к врачу',
      filename: 'appointment.html',
      template: 'src/appointment.html',
      chunks: ['common', 'appointment']
    }),
    new HtmlWebpackPlugin({
      title: 'Запись к врачу',
      filename: 'success.html',
      template: 'src/success.html',
      chunks: ['common', 'success']
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