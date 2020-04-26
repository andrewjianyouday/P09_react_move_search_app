import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

// ep 11
export default combineReducers({
    movies: searchReducer
});