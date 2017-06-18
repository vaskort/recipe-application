import { createSelector } from 'reselect'

export const getRecipes = (state) => state.recipes;
export const getUserState = (state) => state.user;

export const getFilteredRecipes = createSelector(
  [ getRecipes, getUserState],
  (recipes, user) => {
    const searchText = recipes.get('searchText');
    const searchType = recipes.get('searchType');
    if (searchType === 'byName') {
      return recipes.get('recipesData').filter(recipe => {
          // includes function is case sensitive so we make both lower case
          // console.log(recipe.get('name'));
          return recipe.name.toLowerCase().includes(searchText.toLowerCase());
      });
    } else if (searchType === 'byIngredient') {
      return recipes.get('recipesData').filter(recipe => {
          return recipe.ingredients.find(ingredient => {
            return ingredient.name.toLowerCase().includes(searchText.toLowerCase());
          });
      });
    } else if (searchType === 'byFavourite') {
      return recipes.get('recipesData').filter((recipe, i) => {
        if (user.get('starRecipies').indexOf(i) !== -1 ) {
          return true;
        }
      });
    }
    else { // by cooking max time goes here
      // show all recipes if there is not a max time of cooking entered
      if (searchText === '') {
        return recipes.get('recipesData').filter(recipe => {
          return true;
        });
      }
      else {
        return recipes.get('recipesData').filter(recipe => {
          return parseInt(recipe.cookingTime) <= parseInt(searchText);
        });
      }
    }
  }
);
