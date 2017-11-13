import React, { Component } from 'react';
import './header.css';

class SearchBox extends Component {
  render() {
    return (
    <form style={{padding:'10px'}} id="search" action="/search" method="get" class="searchbar" autocomplete="off" role="search">
    <input style={{padding:'10px', width: '600px'}} name="q" type="text" placeholder="Search by ISBN, title, author…" value="" tabindex="1" autocomplete="off" maxlength="240" class="f-input js-search-field"/>
    <button style={{padding:'10px'}} type="submit" aria-label="Search..." class="btn-topbar-primary js-search-submit"><svg aria-hidden="true" class="svg-icon iconSearch" width="15" height="15" viewBox="0 0 18 18"><path d="M12.86 11.32L18 16.5 16.5 18l-5.18-5.14v-.35a7 7 0 1 1 1.19-1.19h.35zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z"></path></svg></button>
    </form>
  );
  }
}

export default SearchBox;
