import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import {Route, Redirect} from 'react-router-dom';
import MoviePosterContainer from './components/MoviePoster/MoviePosterContainer';

const App = () => {
    return(
      <div className="App">
        <Header />
        <Route path='/' render={()=> <Redirect to='/poster'/>}/>
        <Route path='/poster' render={()=> <ContentContainer/>}/>
        <Route path='/movie_poster' render={()=> <MoviePosterContainer/>}/>
      </div>
    );
}



export default App;
