export function searchName(name) {
  return {
    type: "RECIPE_SEARCH_NAME",
    payload: name
  };
}

export function searchType(type) {
  return {
    type: "RECIPE_SEARCH_TYPE",
    payload: type
  }
}