import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchName, searchType } from 'recipeActions';

class Filter extends Component {
  filterRecipes(data, e) {
    let updatedRecipesData = data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.props.filteredData(updatedRecipesData);
  }

  handleRadioChange(props, e) {
    // this.props(searchType(e.target.value));
    props.searchType(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="filterWrapper">
            <label htmlFor="filter">Filter Recipes</label>
            <input type="text" id="filter" onChange={this.filterRecipes.bind(this, this.props.recipesData)}/>
          </div>
          <div className="radioWrapper">
            <form>
              <label htmlFor="byName">
                By name
              </label>
              <input id="byName" type="radio" name="searchType" value="byName"  onChange={this.handleRadioChange.bind(this, this.props)} defaultChecked/>
              <label htmlFor="byIngredient">
                By ingredient
              </label>
              <input id="byIngredient" type="radio" name="searchType" value="byIngredient" onChange={this.handleRadioChange.bind(this, this.props)}/>
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
    recipes: state.recipes
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);