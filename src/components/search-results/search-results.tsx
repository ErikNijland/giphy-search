import React from 'react';
import Spinner from '../spinner/spinner';
import useSearchParam from '../../hooks/use-search-param/use-search-param';
import Pager from '../pager/pager';
import useGiphyApi from '../../hooks/use-giphy-api/use-giphy-api';
import Notification from '../notification/notification';
import GiphyGrid from '../giphy-grid/giphy-grid';

export default function SearchResults () {
  const query = useSearchParam('query') || '';
  const page = Number(useSearchParam('page') || '1');

  const giphyData = useGiphyApi(query, page);

  return (
    <div>
      {giphyData.isLoading &&
        <Spinner/>
      }

      {giphyData.response && giphyData.response.images.length > 0 &&
        <GiphyGrid images={giphyData.response.images} />
      }

      {giphyData.response && query && giphyData.response.numberOfPages === 0 &&
        <Notification type="info">No results found for "<b>{query}</b>"</Notification>
      }

      {giphyData.response &&
        <Pager currentPage={page} numberOfPages={giphyData.response.numberOfPages} />
      }

      {giphyData.error &&
        <Notification type="error">API says no!</Notification>
      }
    </div>
  );
}