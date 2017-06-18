## About CSS

I used SASS for this project though I can work comfortably with LESS, I have a preference to SASS though for some reason

Maybe I overdid it with separating everything (see _variables.scss file), just wanted to show how I would structure a project from the beginning so it would be easier to scale and maintain later on

Moreover, I decided not to use Bootstrap or Foundation

## About bundling CSS and JS  

Again here I could use an easier way to bundle my files instead of Webpack. For instance, I could use watchify which is a simple way to bundle JS and a sass-middleware for express to serve my Sass file. With Webpack though you can do both and generally is more advanced.

## Filtering the Recipes

Initially I thought that it would be a good idea to change directly the state, but then I searched how to filter data in React/Redux and saw that it might not be a good idea. Read about a solution here: https://stackoverflow.com/a/34011774/2394564 that I will use. At that answer the user mentions "selector" function but I want it reusable so I can move it to other components as well. 
Following this example I made a selector function http://blog.rangle.io/react-and-redux-performance-with-reselect/.
The good thing is that we now can attach our selector to any mapDispatchProp we want across our components, making it fully re-usable.

- All filtering were implemented - (by name, by ingredient, by maximum time and favourites)

## Pagination

The pagination component is Pagination.jsx
The two main things that it does is pushing the active page to the store and rendering the page numbers
Now that we know which is the active page everywhere (currentPage in paginationReducer.js) along the app and we know how many
recipes we should render (recipesPerPage in PaginationReducer) we can do the necessary calculations and slice the filteredRecipes
to show them (check line 26 at)

Some UX enhancements I did about pagination are:
- Move to the previous page if say the user is at the last page and start filtering (he would see an empty page otherwise).  
Check Recipes.jsx line 53.
- Hide the pagination if the filtered items are less than the recipesPerPage value
- If you click the same page number the function that changes page will not be dispatched


## Starring a recipe

You can star a recipe from the detailed Recipe view from the star on the top left corner of the image. 
When you can star a recipe the id of the recipe (the index to be more precised) is pushed to a new array 
called starRecipies, check the userReducer.js. Also the favourites are store to localstorage.

In the recipe list if a recipe is favourites a star will be shown as well in top left corner of the image. 

The only thing I didn't implement here is to have different favourites for different users. 
