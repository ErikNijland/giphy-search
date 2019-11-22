import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/"><h1>GIPHY image search</h1></Link>
        <Link to="/settings">Settings</Link>
      </header>
    );
  }
}