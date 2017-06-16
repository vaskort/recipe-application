import React, { Component } from 'react';

class Filter extends Component {
  filterRecipes(data, e) {
    let updatedRecipesData = data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.props.filteredData(updatedRecipesData);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="filterWrapper">
            <label htmlFor="filter">Filter Recipes</label>
            <input type="text" id="filter" onChange={this.filterRecipes.bind(this, this.props.recipesData)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;