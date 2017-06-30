export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = cheese => ({
    type: ADD_CHEESE,
    cheese
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheese => ({
    type: FETCH_CHEESE_SUCCESS,
    cheese
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = cheese => ({
    type: FETCH_CHEESE_ERROR,
    cheese
});

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = cheese => ({
    type: FETCH_CHEESE_REQUEST,
    cheese
});

export const fetchCheese = () => dispatch => {
    dispatch(fetchCheeseRequest());
    fetch('/api/cheeses').then (res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cheese => {
        dispatch(fetchCheeseSuccess(cheese));
    }).catch(err => {
        dispatch(fetchCheeseError(err));
    });
};