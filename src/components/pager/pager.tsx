import React from 'react';
import {Link} from 'react-router-dom';
import useSearchParam from '../../hooks/use-search-param/use-search-param';

interface Props {
  currentPage: number;
  numberOfPages: number;
}

export default function Pager (props: Props) {
  const query = useSearchParam('query');

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