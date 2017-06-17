import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchName, searchType } from 'recipeActions';

import { getFilteredRecipes } from '../selector.js';

class Filter extends Component {
  filterRecipes(data, e) {
    let updatedRecipesData = data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.props.filteredData(updatedRecipesData);
  }

  handleInputChange(props,e) {
    // change the search text in our store
    props.searchName(e.target.value);
  }

  handleRadioChange(props, e) {
    // change the type of search in our store
    props.searchType(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="filterWrapper">
            <label htmlFor="filter">Filter Recipes</label>
            <input type="text" id="filter" onChange={this.handleInputChange.bind(this, this.props)}/>
          </div>
          <div className="radioWrapper">
            <form>
              <div className="labelWrapper"><label htmlFor="byName">
                  By name
                </label>
                <input id="byName" type="radio" name="searchType" value="byName"  onChange={this.handleRadioChange.bind(this, this.props)} defaultChecked/>
              </div>
              <div className="labelWrapper">
                <label htmlFor="byIngredient">
                  By ingredient
                </label>
                <input id="byIngredient" type="radio" name="searchType" value="byIngredient" onChange={this.handleRadioChange.bind(this, this.props)}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// in this component we will need the global state so lets attach it
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filteredRecipes: getFilteredRecipes(state)
  };
};

// Also we will need both the function so lets dispatch them to props too
const mapDispatchToProps = (dispatch) => {
  return {
    searchName: (name) => {
      dispatch(searchName(name));
    },
    searchType: (type) => {
      dispatch(searchType(type));
    }
  }
}

export function filteredItems(state) {
  console.log(state);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);