const path = require('path');
let name = "index";
module.exports = {
  entry: `./src/${name}.tsx`,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${name}.bundle.js`
  },
  mode: "development", // 또는 'production'
  module: {
    rules: [
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test:/\.js|jsx|ts|tsx$/,
        use:"babel-loader",
        exclude:/node_modules/
      },
      {
        test: /\.ts/, //ts인지 확인할거야
        use: "ts-loader", //ts-loader 쓸거야
        exclude: /node_modules/ //제외할거야
      }
    ],
  },
  resolve: { //이행하다
    extensions: [".ts", ".js",".tsx",".jsx",".css"]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
}