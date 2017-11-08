import React, { Component } from 'react';
import './header.css';
import Login from './login.js';
import Logo from './logo.js';
import MakePost from './makepost.js';
import Profile from './profile.js';
import SearchBox from './searchbox.js';

class Header extends Component {
  render() {
    return (
      <div className="rows">
          <Logo className="row" id="logo"/>
          <SearchBox className="row" id="searchBox"/>
          <MakePost className="row" id="makePost"/>
          <Login className="row" id="login"/>
          <Profile className="row" id="profile"/>
      </div>
    );
  }
}

export default Header;
