module.exports = {
  entry: "./app/App.js",
  output : {
    filename: "public/bundel.js"
  },
  devServer: {
    inline: true,
    conentBase: '',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
