export function setAuth(name) {
  return {
    type: "SET_AUTH",
    payload: name
  };
}

export function starUnstarRecipe(recipeId) {
  return {
    type: "STAR_UNSTAR_RECIPE",
    payload: recipeId
  }
}