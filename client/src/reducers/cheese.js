import {ADD_CHEESE} from '../actions/cheese';

export const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_CHEESE:
      return Object.assign({}, state, {cheeses: [...state.cheeses, action.cheese]});

    default:
      return state;
  }
}