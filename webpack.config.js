
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : "./src/index.js",
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
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: './public/index.html',
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
      /*filename : test.html로 할 경우 => http://localhost:9000/test.html*/
    }),
  ],
  output : {
    filename : "bundle.js",
    path : path.resolve (__dirname + "/build")
  },
  devServer : {
    port: 9000
  },
  mode : "none"
}