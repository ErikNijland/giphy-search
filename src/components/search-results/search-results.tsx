import React from 'react';
import Spinner from '../spinner/spinner';
import useSearchParam from '../../hooks/use-search-param/use-search-param';
import Pager from '../pager/pager';
import useGiphyApi from '../../hooks/use-giphy-api/use-giphy-api';

export default function SearchResults () {
  const query = useSearchParam('query') || '';
  const page = Number(useSearchParam('page') || '1');

  const giphyData = useGiphyApi(query, page);

  return (
    <div>
      {giphyData.isLoading &&
        <Spinner/>
      }

      {giphyData.response && giphyData.response.images.map((image) =>
        <img key={image.id} src={image.src} alt={image.alt}/>
      )}

      {giphyData.response &&
        <Pager currentPage={page} numberOfPages={giphyData.response.numberOfPages} />
      }
    </div>
  );
}