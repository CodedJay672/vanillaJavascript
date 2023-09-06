const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: {
          loader: 'url-loader'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
  }
};
