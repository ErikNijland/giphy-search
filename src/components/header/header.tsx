import React from "react";
import {Link, matchPath, useLocation} from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();
  const showLink = matchPath(location.pathname, { path: "/", exact: true }) === null;
  const header = "GIPHY image search";

  return (
    <header className="Header">
      <h1 className="Header__Title">
        {showLink
          ? <Link to="/" className="Header__Link">{header}</Link>
          : header
        }
      </h1>

      <nav className="Header_Menu">
        <Link to="/settings" className="Header__Link">Settings</Link>
      </nav>
    </header>
  );
}
