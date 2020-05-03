import {SEARCH_MOVIE, FETCH_MOVIES, LOADING} from './types';
import axios from 'axios'
import {APIKey} from '../APIKey'


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


/**
 * Create Fetch Mmovies Action
 */

// export const fetchMovies = text => dispatch => {
// axios
//     .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response => 
//         dispatch({
//             type: FETCH_MOVIES,
//             payload: response.data

//     })
//     )
//     .catch(err => console.log(err))

        
//  };

export const fetchMovies = text => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`).then(response =>
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data.Search
        })
      )
      .catch(err => console.log(err));
  };


  export const setLoading = () => {
    return {
        type: LOADING
    }

  }