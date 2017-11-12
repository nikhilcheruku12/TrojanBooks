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
      <div className="topbar">
          <Logo className="item" id="logo"/>
          <SearchBox className="item" id="searchBox"/>
          <MakePost className="item" id="makePost"/>
          <Login className="item" id="login"/>
          <Profile className="item" id="profile"/>
      </div>
    );
  }
}

export default Header;
