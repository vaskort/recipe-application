import { Map } from 'immutable';

const userReducer = (state = Map({
  name: 'Joe',
  starRecipies: []
}), action) => {
  switch (action.type) {
    case "SET_AUTH":
      state = state.merge({name: action.payload});
      break;
    case "STAR_UNSTAR_RECIPE":
      let index = state.get('starRecipies').indexOf(action.payload);
      // if the item exists in the favourite array remove it
      if (index !== -1) {
        let newState = state.get('starRecipies').splice(index, 1);
        state = state.merge({newState});
      }
      // else add it to the favourites array
      else {
        let newState = state.updateIn(['starRecipies'], array => { array.push(action.payload) });
        state = state.merge({newState});
      }
      break;
  }
  return state;
}

export default userReducer; 