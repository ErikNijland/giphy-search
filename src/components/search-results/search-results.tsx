import React from "react";
import useSearchParam from "../../hooks/use-search-param/use-search-param";
import GiphyGrid from "../giphy-grid/giphy-grid";
import useSimpleFetch from '../../hooks/simple-fetch/simple-fetch';

export default function SearchResults() {
  const query = useSearchParam("query") || "";
  const page = Number(useSearchParam("page") || "1");

  const response = useSimpleFetch(query, page);

  return (
    <>
      {response && <GiphyGrid images={response.images} />}
    </>
  )
  /*
  return (
    <div>
      {giphyData.isLoading &&
        <Spinner />
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
  */
}
