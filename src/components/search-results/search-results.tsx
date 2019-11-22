import React, {useEffect, useState} from 'react';
import GiphyApi from '../../services/giphy-api/giphy-api';
import Spinner from '../spinner/spinner';
import {Image} from "../../types/image";
import useSearch from '../../hooks/use-search/use-search';

interface Props {
  query: string;
}

export default function SearchResults (props: Props) {
  const [ images, setImages ] = useState<Image[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ numberOfPages, setNumberOfPages ] = useState(0);

  const pageSearchParam = useSearch('page');
  const page = Number.isInteger(Number(pageSearchParam)) ? Number(pageSearchParam) : 1;

  useEffect(() => search(props.query, 1), [ props.query ]);
  useEffect(() => search(props.query, page), [ page ]);

  return (
    <div>
      {isLoading &&
        <Spinner/>
      }

      {images && images.map((image) =>
        <img key={image.id} src={image.src} alt={image.alt}/>
      )}

      {page}
    </div>
  );

  function search(query: string, page: number): void {
    const hasQuery = query.trim().length > 0;

    setImages([]);
    setIsLoading(hasQuery);

    if (!hasQuery) {
      return;
    }

    GiphyApi
      .fetchImages(query)
      .then(
        (searchResults) => {
          setImages(searchResults.images);
          setIsLoading(false);
          setNumberOfPages(searchResults.numberOfPages);
        },
        (_) => {
          // Todo
        }
      );
  }
}