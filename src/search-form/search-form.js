import React from 'react';

export default function SearchForm(props) {
  return (
    <form>
      <label>
        Search query
        <input value={props.query }/>
      </label>
    </form>
  );
}
