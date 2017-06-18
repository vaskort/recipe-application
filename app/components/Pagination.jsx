import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as classNames } from 'classnames';

import { getFilteredRecipes } from '../selector.js';
import { goToPage, setCurrentRecipies } from 'paginationActions';

// this component will only update the currentpage
// since we know how many recipes per page we want (added it also to the store so we are able to test quickly)
// it will be easy to render them in our Recipes component or wherever we want to :)
class Pagination extends Component {
  handleClick(props, e) {
    props.goToPage(parseInt(e.target.dataset.pagenumber));
  }

  handleActiveClassName(props, e) {
    return e.target.dataset.pagenumber === props.pagination.get('currentPage') ? 'active' : '';
  }

  render() {
    const recipesPerPage = this.props.pagination.get('recipesPerPage');
    const { filteredRecipes } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRecipes.length/recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(page => {
      return (
        <li 
          key={page}
          data-pagenumber={page}
          onClick={this.handleClick.bind(this, this.props)}
          className={classNames({ active: page === this.props.pagination.get("currentPage") })}>
          {page}
        </li>
      )
    });

    return (
      <div className="pagination">
        <ul>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filteredRecipes: getFilteredRecipes(state),
    pagination: state.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (page) => {
      dispatch(goToPage(page));
    },
    setCurrentRecipies: (recipies) => {
      dispatch(setCurrentRecipies(recipies));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);