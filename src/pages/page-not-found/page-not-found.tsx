import {Link} from 'react-router-dom';
import React from 'react';

export default function PageNotFound () {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}