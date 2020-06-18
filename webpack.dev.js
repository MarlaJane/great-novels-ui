const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client.jsx',
  mode: 'development',
  watch: true,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  resolve: {
    extentions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'public', 'javascript'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify('http://localhost:2319/api'),
    }),
  ],
}
