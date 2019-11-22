import React from 'react';
import {Link} from 'react-router-dom';
import useSearch from '../../hooks/use-search/use-search';

interface Props {
  currentPage: number;
  numberOfPages: number;
}

export default function Pager (props: Props) {
  const query = useSearch('query');

  return (
    <div>
      {props.numberOfPages > 1 && (
        <nav>
          <ul>
            {props.currentPage > 1 &&
              <li><Link to={`?query=${query}&page${props.currentPage - 1}`}>Previous</Link></li>
            }

            {props.currentPage < props.numberOfPages &&
              <li><Link to={`?query=${query}&page=${props.currentPage + 1}`}>Next</Link></li>
            }
          </ul>
        </nav>
      )}
    </div>
  );
}