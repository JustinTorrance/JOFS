import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <NavLink to='/home' className='nav'>Home</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
