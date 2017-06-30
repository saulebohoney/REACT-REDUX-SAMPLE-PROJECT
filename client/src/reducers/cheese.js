import *  as actions  from '../actions/cheese';

export const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {

    case actions.FETCH_CHEESE_REQUEST:
        return Object.assign({}, state, {
            loading:true});
  
    case actions.FETCH_CHEESE_SUCCESS:
        return Object.assign({}, state, {
            cheeses: action.cheese});

    case actions.FETCH_CHEESE_ERROR:
        return Object.assign({}, state, {
            error:'Error!'});
    default:
        return state;
    }
};