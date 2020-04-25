/** each action has parameters 
 * reco action by
 * 1, type
 * 2, payload - data comes from action
 * 
 */

 import {SEARCH_MOVIE} from '../action/types';

 // 4 basic states
 const initialStates = {
     text = '', // user search text
     movies = [], // search result 
     loading: false, // f/t depending on data arrived/or not
     movie:[]
 }

 