module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './src',
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true, // auto reload
    port: 8000,
    host: '192.168.1.120', // to access with mobile
    contentBase: "./src"
  },
  module: {
    loaders: [
      // JS Definitions
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // CSS Definitions
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }, 
      // Font Definitions
          {   
            test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      }
    ]
  }
}
 
