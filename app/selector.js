import { createSelector } from 'reselect'

export const getRecipes = (state) => state.recipes;
export const getPaginationState = (state) => state.pagination;

export const getFilteredRecipes = createSelector(
  [ getRecipes ],
  (recipes) => {
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
      // the safest best way here would be the recipes to have id and match the id from the favourites array 
      // and the recipe data array and show those that matchMedia. I will do this now but with the indeces 
    }
    // by cooking time goes here
    else {
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
