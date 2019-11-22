import React, {useEffect, useState} from 'react';
import GiphyApi from '../../services/giphy-api/giphy-api';
import Spinner from '../spinner/spinner';
import {Image} from "../../types/image";
import useSearch from '../../hooks/use-search/use-search';
import Pager from '../pager/pager';

export default function SearchResults () {
  const [ images, setImages ] = useState<Image[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ numberOfPages, setNumberOfPages ] = useState(0);

  const query = useSearch('query') || '';
  const page = Number(useSearch('page') || '1');

  useEffect(() => search(query, page), [ query, page ]);

  return (
    <div>
      {isLoading &&
        <Spinner/>
      }

      {images.map((image) =>
        <img key={image.id} src={image.src} alt={image.alt}/>
      )}

      <Pager currentPage={page} numberOfPages={numberOfPages} />
    </div>
  );

  function search(query: string, page = 1): void {
    const hasQuery = query.trim().length > 0;

    setImages([]);
    setIsLoading(hasQuery);
    setNumberOfPages(0);

    if (!hasQuery) {
      return;
    }

    GiphyApi
      .fetchImages(query, page)
      .then(
        (searchResults) => {
          setImages(searchResults.images);
          setIsLoading(false);
          setNumberOfPages(searchResults.numberOfPages);
        },
        (_) => {
          // Todo
          console.log('error');
        }
      );
  }
}