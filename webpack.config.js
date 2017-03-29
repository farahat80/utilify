module.exports = {
  entry: {
    utilify: './src/utilify.js'
  },
  output: {
    filename: './dist/scripts/[name].js',
    library: 'utilify',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: (process.env.NODE_ENV !== 'production' ? 'source-map' : false ),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['latest']
        }
      }
    ]
  },
  plugins: []
};