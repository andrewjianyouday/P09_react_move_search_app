import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
/**
 * Check movie state value.
 * 
 * if empty 
 *  display null
 * else
 *  map through movies state object
 *      display movie card
 * 
 */
export class MoviesContainer extends Component {
    render() {

        // distructure the movies
        const {movies} = this.props;
        let content = '';
        
        content = movies.length > 0 ? movies.map((movieItem, index) => <MovieCard key = {index} movie = {movieItem}/>) : null
        return (
            <div className = "row">
                {content}
                
            </div>
        )
    }
}
const mapStateToProps = state =>({
    movies: state.movies.movies

})
export default connect(mapStateToProps)(MoviesContainer)
