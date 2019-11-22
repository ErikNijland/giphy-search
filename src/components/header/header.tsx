import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1><Link to="/">GIPHY image search</Link></h1>
        <Link to="/settings">Settings</Link>
      </header>
    );
  }
}