import SearchForm from '../../components/search-form/search-form';
import SearchResults from '../../components/search-results/search-results';
import React from 'react';

export default function App () {
  return (
    <div>
      <SearchForm />
      <SearchResults />
    </div>
  );
}