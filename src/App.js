import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import {Route, withRouter, Redirect} from 'react-router-dom';

const App = () => {
    
    return(
      <div className="App">
        <Header />
        <Route path='/' render={()=> <Redirect to='/poster'/>}/>
        <Route path='/poster' render={()=> <ContentContainer/>}/>
      </div>
    );
}



export default withRouter(App);
