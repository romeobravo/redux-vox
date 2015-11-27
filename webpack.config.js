module.exports = {
  entry: {
    react: './react/main.react'
  },
  output: {
    filename: 'public/aaa.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['jsx', 'babel'],
        exclude: /node_modules/
      }
    ]
  }
};