import {SEARCH_MOVIE} from './types';

/**
 * 
 * @param {*} text 
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
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })

}