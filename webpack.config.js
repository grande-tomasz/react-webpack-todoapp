const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

let env = process.env.NODE_ENV || "DEV";
let plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
  })
];

console.log("NODE_ENV:", env);
// the below condition is not triggered despite the fact that NODE_ENV=PROD
if(env === "PROD") {
  console.log("optimize plugins included");
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    // new UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true
            }
          }
        ]
      }
    ]
  },
  plugins
};
