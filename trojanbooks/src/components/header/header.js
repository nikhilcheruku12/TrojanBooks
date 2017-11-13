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
      <div className="header">
          <Logo className="item" id="logo"/>
          <SearchBox className="search" id="searchBox"/>
          <div className="item">
            <MakePost id="makePost"/>
            <Login id="login"/>
            <Profile id="profile"/>
          </div>
      </div>
    );
  }
}

export default Header;
