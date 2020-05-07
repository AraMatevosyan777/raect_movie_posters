import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';

const App = () => {
    
    return(
      <div className="App">
        <Header />
        <ContentContainer/>
      </div>
    );
}



export default App;
