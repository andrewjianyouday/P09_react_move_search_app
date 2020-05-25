import React, { Component } from 'react'
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions'
import {connect} from 'react-redux'

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    // onSubmit = e => {
    //     e.preventDefault();
    //     this.props.fetchMovies(this.props.text) // the action in the props; text is passed already saved/pulled out in state, just call it
    // }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        
        // set loading as True(spiner spining) when requesting data via api call
        this.props.setLoading();
        // console.log(this.props.text)
        
      };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a movie ,TV series ..
                    </h1>
                    
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


// destructering method
// pullout state from global states
const mapStateToProps = state => ({
    text: state.movies.text
})


// if already has action inside component
// so we need this action in the connect
export default connect(mapStateToProps, 
    { searchMovie, fetchMovies, setLoading})
    (SearchForm);
