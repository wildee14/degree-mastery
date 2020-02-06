const path = require("path");
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: { index: ["./src/app.jsx"] },
  output: {
    path: path.join(__dirname, "public"),
    chunkFilename: '[name].bundle.js',
    filename: "bundle.js"
  },
  mode: 'production',
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      include: /\.js$/
    })]
  },
  plugins: [	 
    new webpack.DefinePlugin({ //<--key to reduce React's size	    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {	      
        'NODE_ENV': JSON.stringify('production')	        
      }	     
    }),	    
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({	   
      asset: "[path].gz[query]",
      algorithm: "gzip",	      
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,	      
      minRatio: 0.8	      
    })
  ],

  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: '/',
    historyApiFallback: true,
    // compress: true,
  },
};
