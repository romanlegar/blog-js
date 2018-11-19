const path = require('path');

module.exports = {
  entry: './public/js/modules.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    path: path.resolve(__dirname, 'dev/public/js')
  },
  devServer: {
     contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  }
};
