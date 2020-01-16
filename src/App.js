import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';

class App extends React.Component{

  

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/join">

          </Route>
          <Route exact path="/host">

          </Route>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
