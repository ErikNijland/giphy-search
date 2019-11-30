import {settings} from "../../settings";
import {IFetchApiState} from "../../types/fetch-api-state";
import {IGiphyImage} from "../../types/giphy-api/giphy-image";
import {IGiphySearchResponse} from "../../types/giphy-api/giphy-search-response";
import {ISearchResults} from "../../types/search-results";
import useFetchApi from "../use-fetch-api/use-fetch-api";
import {IGiphyImageSource} from '../../types/giphy-api/giphy-image-source';
import {IImageSource} from '../../types/image-source';
import {useEffect, useState} from 'react';

export default function useGiphySearch(query: string, page: number): IFetchApiState<ISearchResults> {
  const [ fetchUrl, setFetchUrl ] = useState();
  const fetchState = useFetchApi<IGiphySearchResponse>(fetchUrl);

  useEffect(() => {
    if (query === '') {
      setFetchUrl(null);

      return;
    }

    const offset = (page - 1) * settings.imagesPerPage;
    const limit = settings.imagesPerPage;

    setFetchUrl(`//api.giphy.com/v1/gifs/search?api_key=${settings.giphyApiKey}&q=${query}&offset=${offset}&limit=${limit}`);
  }, [ query, page ]);

  return {
    ...fetchState,
    response: fetchState.response ? mapApiResponse(fetchState.response) : null,
  };

  function mapApiResponse(giphySearchResponse: IGiphySearchResponse): ISearchResults {
    return {
      images: giphySearchResponse.data.map((giphy: IGiphyImage) => {
        return {
          alt: giphy.title,
          id: giphy.id,
          formats: {
            small: mapImageSource(giphy.images.fixed_height_small),
            large: mapImageSource(giphy.images.fixed_height),
          },
        };
      }),
      numberOfPages: Math.ceil(giphySearchResponse.pagination.total_count / settings.imagesPerPage),
    };
  }

  function mapImageSource(giphyImageSource: IGiphyImageSource): IImageSource {
    const {
      height,
      mp4,
      url: gif,
      webp,
      width,
    } = giphyImageSource;

    return {
      gif,
      height,
      mp4,
      webp,
      width,
    };
  }
}