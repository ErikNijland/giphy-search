import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import useSearchParam from '../../hooks/use-search-param/use-search-param';

export default function SearchForm () {
  const [ inputQuery, setInputQuery ] = useState<string>(useSearchParam('query') || '');
  const history = useHistory();

  function search (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    history.push(`?query=${inputQuery}`);
  }

  return (
    <div>
      <form onSubmit={search}>
        <label>
          Search query
          <input value={inputQuery} onChange={(event) => setInputQuery(event.target.value)} autoFocus />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
