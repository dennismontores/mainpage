const path = require('path');
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function (env) {
  return {
    entry: ['./src/js/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },
    devServer: {
      watchContentBase: true,
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      compress: true,
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Dennis Montores',
        filename: 'index.html',
        template: './src/index.html',
        hash: true
      }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/img/circuit.svg',
        cache: true,
        publicPath: './',
        // The directory to output the assets relative to the webpack output dir.
        // Relative string paths are allowed here ie '../public/static'. If this
        // option is not set, `prefix` is used.
        outputPath: '/assets/img/favicon',
        prefix: 'assets/img/favicon/'
      }),
      new MiniCssExtractPlugin({
        filename: !env.production ? 'css/[name].css' : 'css/[name].[hash].css',
        chunkFilename: !env.production ? 'css/[id].css' : 'css/[id].[hash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              }
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  tailwindcss('./tailwind.config.js'),
                  require('autoprefixer'),
                  env.production == 'true' ?
                    require('@fullhuman/postcss-purgecss')({
                      content: [
                        './src/index.html'
                      ],
                      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
                    }) : false,
                  require('cssnano')({
                    preset: 'default',
                  })
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img',
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    }
  }
}