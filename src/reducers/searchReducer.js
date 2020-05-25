 import {SEARCH_MOVIE, FETCH_MOVIES, LOADING, FETCH_MOVIE} from '../actions/types';
/** each action has parameters 
 * reco action by
 * 1, type
 * 2, payload - data comes from action
 * 
 */


 /** 
 * In SearchAction
 * 1, user search with ' text ' 
 * 2, this ' text ' will be passed to this SearchAction
 * 3, this ' text ' will be set into the payload inside reducer (in searchReducer)
 * 
 * In SearchReducer
 * 1, check action type if has same Type.
 * 2, return  the text state into action payload which is text.
 * 
 */
 // 4 basic states
 const initialState = {
     text: '', // user search text
     movies: [], // search result 
     loading: false, // f/t depending on data arrived/or not
     movie: [] // single movie: get info from api. 
 }

 export default function(state = initialState, action){

    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };

        default: 
        return state
    }

 }