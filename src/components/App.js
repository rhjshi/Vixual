import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import JoinRoom from './JoinRoom';
import MemberRoom from './MemberRoom';

class App extends React.Component{

  

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home}>
            {/* <Home/> */}
          </Route>
          <Route exact path="/join" component={JoinRoom}/>
          <Route exact path="/join/:id" component={MemberRoom}/>
          <Route exact path="/host/:id"/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
