const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  mode: 'production', // "production" | "development" | "none"
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename:'[name].[contenthash].js',
    filename: pathData => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js'
    },
    // new to webpack 5, instead of CleanWebpackPlugin
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/icons/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
      }
    ]
  }
}
