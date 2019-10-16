import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import MeetDoctor from '../MeetDoctor/MeetDoctor';
import Patients from '../Patients/Patients'
import Contact from '../Contact/Contact'
import Procedures from '../Procedures/Procedures'
import Doctors from '../Doctors/Doctors'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


export default function App () {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
    return (
      <div className="App">
        <div className='content-wrapper'>
          <div className='header-section'>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
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
            <Route path='/doctors' component={Doctors} />
          </Switch>
          <p className='copyright'>Jackson Oral and Facial Surgery &copy; 2019</p>
        </div>
      </div>
    );
  }

