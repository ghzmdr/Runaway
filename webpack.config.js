const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
})

module.exports = {

  entry: [
    'react-hot-loader/patch',
    './src/js/main.js'
  ],

  module: {

    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
          test: /\.(css|scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSass
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js'
  },

  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    hot: true
  }
};
