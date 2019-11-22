import {Link} from 'react-router-dom';
import React from 'react';

export class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Page not found</h2>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}