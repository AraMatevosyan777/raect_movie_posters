import React from 'react';
import MoviePoster from './MoviePoster';
import { connect } from 'react-redux';
import Loader from '../common/Loader/Loader';

class MoviePosterContainer extends React.Component{
    render(){
        if(this.props.loading) return <Loader/>
       return(
            <MoviePoster moviePoster={this.props.moviePoster}/>
        ) 
    }
}
const mstp = (state) => ({
    moviePoster: state.reducer.moviePoster,
    loading: state.reducer.loading,
})
export default connect(mstp)(MoviePosterContainer);