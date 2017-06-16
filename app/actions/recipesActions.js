export function searchName(name) {
  return {
    type: "RECIPE_SEARCH_NAME",
    payload: name
  };
}

export function searchIngredient(ingredient) {
  return {
    type: "RECIPE_SEARCH_INGREDIENT",
    payload: ingredient
  }
}