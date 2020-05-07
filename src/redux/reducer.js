import *as axios from 'axios';
const SET_POSTERS = 'SET_POSTERS';
const LOADING = 'LOADING';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const SET_TOTAL_POSTERS_COUNT = 'SET_TOTAL_POSTERS_COUNT';
const SET_PAGE = 'SET_PAGE';
const SET_VALUE = 'SET_VALUE';

let initialState = {
    value: "America",
    posters: [],
    loading: false,
    error: '',
    searchValue: '',
    totalPostersCount: 0,
    page: 1
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_POSTERS:
            return{
                ...state,
                posters: action.payload
            };
        case LOADING:
            return{
                ...state,
                loading: action.load
            };
        case SET_ERROR_MESSAGE:
            return{
                ...state,
                error: action.error
            };
        case SET_TOTAL_POSTERS_COUNT:
            return{
                ...state,
                totalPostersCount: action.count
            };
        case SET_PAGE:
            return{
                ...state,
                page: action.page
            };
        case SET_VALUE:
            return{
                ...state,
                value: action.value
            };
            default:
                return state;
    }
}

const setPosters = (data) => ({type: SET_POSTERS, payload: data})
const setTotalPostersCount= (count) => ({type: SET_TOTAL_POSTERS_COUNT, count})
const setPage= (page) => ({type: SET_PAGE, page})
const loading = (load) => ({type: LOADING, load})
const setErrorMessage = (error) => ({type: SET_ERROR_MESSAGE, error})
export const setSearchValue = (value) => ({type: SET_VALUE, value})

export const getPosters = (page, value) => async(dispatch) => {
    dispatch(loading(true));
    dispatch(setPage(page))
    let response = await axios.get(`http://omdbapi.com/?apikey=2d49a8ef&s=${value}&page=${page}`);
    if(response.data.Response === "True"){
    dispatch(setErrorMessage(''))
    dispatch(setTotalPostersCount(response.data.totalResults))
    let data = response.data.Search;
    dispatch(setPosters(data))
    }else if(response.data.Response === "False"){
        dispatch(setTotalPostersCount(0))
        dispatch(setErrorMessage(response.data.Error))
    }
    dispatch(loading(false));
}