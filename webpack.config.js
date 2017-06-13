const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      appStyles: path.resolve(__dirname, './app/styles/app.scss'),
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      Recipes: path.resolve(__dirname, './app/components/Recipes.jsx'),
      RecipeDetail: path.resolve(__dirname, './app/components/RecipeDetail.jsx'),
      foundationStyles: path.resolve(__dirname, './node_modules/foundation-sites/dist/css/foundation.min.css'),
      recipeData: path.resolve(__dirname, './data/test-data.json'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
