import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import MeetDoctor from '../MeetDoctor/MeetDoctor';
import Patients from '../Patients/Patients'
import Contact from '../Contact/Contact'
import Procedures from '../Procedures/Procedures'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <NavLink to='/' exact className='nav'>Home</NavLink>
          <NavLink to='/meet' className='nav'>Meet Dr. Hicks</NavLink>
          <NavLink to='/procedures' className='nav'>Procedures and Services</NavLink>
          <NavLink to='/patients' className='nav'>Patient Care</NavLink>
          <NavLink to='/doctors' className='nav'>Referring Doctors</NavLink>
          <NavLink to='/contact' className='nav'>Contact Us</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/meet' component={MeetDoctor} />
          <Route path='/patients' component={Patients} />
          <Route path='/contact' component={Contact} />
          <Route path='/procedures' component={Procedures} />
        </Switch>
        <p className='copyright'>Jackson Oral and Facial Surgery &copy; 2019</p>
      </div>
    );
  }
}

export default App;
