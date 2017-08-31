import React , { Component } from 'react';

class SiteHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="header-title">Basic React Weather app</h1>
        <input type="text" placeholder="stub location search" className="weather-search" />
      </header>
    );
  }

}

export default SiteHeader;
