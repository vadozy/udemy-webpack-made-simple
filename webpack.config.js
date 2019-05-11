const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    watchContentBase: true // enable hot loading to static (html) files
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: ["style-loader", "css-loader"]
        //use: ["style-loader/url", "file-loader"]
        use: [
          "style-loader/url",
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  }
}
