const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // применяются справа-налево. Сначала цсс, а потом стайл.
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4040,
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
  },
});
