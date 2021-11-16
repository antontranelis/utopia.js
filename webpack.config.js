const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    materialize: './src/materialize.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: {
    errorDetails: true
  },

  //loaders
  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //images
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: 'asset/resource'
      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
    ],
    noParse: /gun\.js$/,
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  performance: { hints: false }

}
