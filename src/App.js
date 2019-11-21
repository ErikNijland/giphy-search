import React from 'react';
import './App.css';
import SearchForm from "./search-form/search-form";

function App() {
  const query = 'poep';

  return (
    <div>
      <h1>GIPHY image search</h1>
      <SearchForm query={query} />
    </div>
  );
}

export default App;
