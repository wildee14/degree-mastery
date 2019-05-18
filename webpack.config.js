const path = require("path");
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: { index: ["./src/app.jsx"] },
  output: {
    path: path.join("/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query:
          {
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins:["@babel/plugin-proposal-class-properties"]
          },
    },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ],
  },

  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
  },
};
