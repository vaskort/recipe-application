import { createSelector } from 'reselect'

export const getRecipes = (state) => state.recipes;

export const getFilteredRecipes = createSelector(
  [ getRecipes ],
  (recipes) => {
      const searchText = recipes.get('searchText');
      const searchType = recipes.get('searchType');
      console.log(recipes);
      return recipes.get('recipesData').filter(recipe => {
        if (searchType === 'byName') {
          // includes function is case sensitive so we make both lower case
          // console.log(recipe.get('name'));
          return recipe.name.toLowerCase().includes(searchText.toLowerCase());
        }
        else if (searchType === 'byIngredient') {
          return recipe.ingredients.find(ingredient => {
            return ingredient.name.toLowerCase().includes(searchText.toLowerCase());
          });
        }
        // by cooking time goes here
        else {
          console.log(parseInt(recipe.cookingTime), parseInt(searchText));
          return parseInt(recipe.cookingTime) <= parseInt(searchText);
        }
      });
  }
);
