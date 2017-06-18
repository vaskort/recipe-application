## About CSS

I used SASS for this project though I can work comfortably with LESS, I have a preference to SASS though for some reason

Maybe I overdid it with separating everything (see _variables.scss file), just wanted to show how I would structure a project from the beginning so it would be easier to scale and maintain later on

Moreover, I decided not to use Bootstrap or Foundation

## About bundling CSS and JS  

Again here I could use an easier way to bundle my files instead of Webpack. For instance, I could use watchify which is a simple way to bundle for JS and a sass-middleware for express to serve my Sass file. With Webpack though you can do both.

## Filtering the Recipes

Initially I thought that it would be a good idea to change directly the state, but then I searched how to filter data in React/Redux (because to be honest haven't done it before) and saw that it might not be a good idea. Read about a solution here: https://stackoverflow.com/a/34011774/2394564 that I will use. At that answer the guy mentions "selector" function but I want it reusable so I can move it to other components as well. Following this example I made a selector function http://blog.rangle.io/react-and-redux-performance-with-reselect/.

So we now we can attach our selector to any mapDispatchProp we want across our componenents making it fully usable everywhere.

## Starring a recipe


My notes
----------
check if you can omit path.resolve(__dirname, in webpack config