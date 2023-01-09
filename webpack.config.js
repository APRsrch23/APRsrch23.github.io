const path = require('path');

const SRC = path.resolve(__dirname, 'node_modules');

const rootConfig = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devtool: "eval-source-map"
};

const appConfig = {
  ...rootConfig,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
};



module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devtool: "eval-source-map",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
  module: {
    rules: [
      {
        test: /\.ogg$/,
        loader: 'file-loader'
      }
    ]
  }
}