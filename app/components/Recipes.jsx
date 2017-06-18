import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Filter from 'Filter';
import Pagination from 'Pagination';
import { getFilteredRecipes } from '../selector.js';
import { goToPage } from 'paginationActions';


class Recipes extends Component {

  getRecipes(){
    // if there are recipes then return them

    let recipesPerPage = this.props.pagination.get('recipesPerPage');
    let currentPage = this.props.pagination.get('currentPage');
    // we need the index of the last recipe of the page
    let indexOfLastRecipeAtPage = recipesPerPage * currentPage;
    // we need the index of the first recipe of the page
    let indexOfFirstRecipeAtPage = indexOfLastRecipeAtPage - recipesPerPage;

    if (this.props.filteredRecipes.length > 0) {
      // now we can slice our filtered recipe between the first and last indeces
      let recipes = this.props.filteredRecipes.slice(indexOfFirstRecipeAtPage, indexOfLastRecipeAtPage).map((recipe, index) =>
        // it would be best if the recipes had ids but index will do
        <li key={index} className="recipe">
          <Link key={index} to={`/recipe/${index}`}>
            <h2 className="recipeTitle">
              <span className="underlineHelper">{recipe.name}</span>
            </h2>
            <div className="recipeHelperContainer">
              <div className="image">
                <img src={recipe.image} alt={recipe.name}/>
              </div>
              <div className="infoContainer">
                <div className="mainIngredients">
                  <h3>Main ingredients</h3>
                  {recipe.ingredients.map((ingredient, index) => {
                    return <div className="ingredient" key={index}>- {ingredient.name}</div>
                  })}
                </div>
                <div className="cookingTime">
                  <h3>Cooking Time</h3>
                  {recipe.cookingTime}
                </div>
              </div>
            </div>
          </Link>
        </li>
      );
      // this moves to a previous page if no recipes returned
      // this case happens when you are in the last page and you start filtering the recipes
      // without this you would stay in an empty page
      if (recipes.length === 0 && this.props.filteredRecipes.length > 0) {
        this.props.goToPage(this.props.pagination.get("currentPage") - 1);
      }
      return recipes;
    }
    // if there are not return an error message
    else if (this.props.filteredRecipes.length === 0 && this.props.recipes.get('recipesData').length > 0) {
      // show the favourites sorry message
      if (this.props.recipes.get('searchType') === 'byFavourite') {
        return <li className="sorryMessage">
          <h2>Sorry, you don't currently have any starred recipes, get started by starring recipes you like</h2>
        </li>
      }
      else {
        return <li className="sorryMessage">
          <h2>Sorry, nothing matched your filter term</h2>
        </li>
      }
    }
    else {
      return <li className="sorryMessage">
        <h2>Sorry, we currently have no recipes for you</h2>
      </li>
    }
  }

  render() {
    let recipes = this.getRecipes();
    return (
        <div>
          { this.props.recipes.get('recipesData').length > 0 && <Filter /> }
          <div className="container">
            <div className="row">
              <ul className="recipeContainer">
                {recipes}
              </ul>
            </div>
            <Pagination />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filteredRecipes: getFilteredRecipes(state),
    pagination: state.pagination
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (page) => {
      dispatch(goToPage(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
