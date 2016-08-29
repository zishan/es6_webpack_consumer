module.exports = {
  entry: ['./consumer.js'],
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/, loader: 'url?limit=100000'},
      {test: /\.json$/, loader: 'json'}
    ]
  }
};
