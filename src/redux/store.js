import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './reducer';
const reducers = combineReducers({
    reducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;