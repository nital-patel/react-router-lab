import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './App';
import Birds from './Birds';

class Nav extends Component {
  render(){
    return(
      <div className='nav-bar'>
        <Link to='/' component={App}>Home</Link>
        <Link to='/birds' component={Birds}>Birds!!</Link>
        </div>
      )
  }
}

export default Nav;
