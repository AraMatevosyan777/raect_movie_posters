import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import {Route, Redirect} from 'react-router-dom';

const App = () => {
    
    return(
      <div className="App">
        <Header />
        {/* <Route path='' render={()=> <Redirect to='./posters'/>}/> */}
        <Route path='' render={()=> <ContentContainer/>}/>
      </div>
    );
}



export default App;
