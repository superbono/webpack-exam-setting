
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry : "./src/index.js",
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@asset': path.resolve(__dirname, 'asset'),
        '@public': path.resolve(__dirname, 'public')
    },
    extensions: ['.js', '.jsx', '.json','.css','png']
  },
  module : {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            /*options: {
              limit: 10000,
              name: 'images/[folder]/[name].[ext]',
              esModule: true
            }*/
          },
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: './public/index.html',
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
      /*filename : test.html로 할 경우 => http://localhost:9000/test.html*/
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  output : {
    filename : "bundle.js",
    path : path.resolve (__dirname + "/build")
  },
  devServer :{
    port: 9000
  },
  mode : "none"
}