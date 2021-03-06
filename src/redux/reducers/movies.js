import {CURRENT_PAGE, GET_GENRE, GET_MOVIES, LOADING_FALSE, LOADING_TRUE} from "../actionTypes";

const initialState = {
    movies: [],
    currentPage: 1,
    allPage: 10,
    totalPage: 0,
    todosLoading: false,
    genre: {id: 'All', name: 'All'}
};

export const moviesReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_MOVIES: {
            return {...state, movies: action.payload, totalPage: action.payload.total_pages}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true};
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false};
        }
        case CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case GET_GENRE: {
            return {...state, genre: action.payload}
        }
        default: {
            return state;
        }
    }
}
