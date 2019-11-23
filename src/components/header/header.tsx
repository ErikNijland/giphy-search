import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__Title"><Link to="/" className="Header__Link">GIPHY image search</Link></h1>

        <nav className="Header_Menu">
          <Link to="/settings" className="Header__Link">Settings</Link>
        </nav>
      </header>
    );
  }
}