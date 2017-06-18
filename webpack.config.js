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
      NoMatch: path.resolve(__dirname, './app/components/NoMatch.jsx'),
      Filter: path.resolve(__dirname, './app/components/Filter.jsx'),
      Pagination: path.resolve(__dirname, './app/components/Pagination.jsx'),
      recipeData: path.resolve(__dirname, './data/test-data.json'),
      recipeActions: path.resolve(__dirname, './app/actions/recipesActions.js'),
      paginationActions: path.resolve(__dirname, './app/actions/paginationActions.js'),
      userActions: path.resolve(__dirname, './app/actions/userActions.js'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
