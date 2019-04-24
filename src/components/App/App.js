import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <NavLink to='/' exact activeClassName='active' className='nav'>Home</NavLink>
          <NavLink to='/meet' className='nav'>Meet Dr. Hicks</NavLink>
          <NavLink to='/procedures' className='nav'>Procedures and Services</NavLink>
          <NavLink to='/patient' className='nav'>Patient Care</NavLink>
          <NavLink to='/doctors' className='nav'>Referring Doctors</NavLink>
          <NavLink to='/contact' className='nav'>Contact Us</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <p className='copyright'>Jackson Oral and Facial Surgery &copy; 2019</p>
      </div>
    );
  }
}

export default App;
