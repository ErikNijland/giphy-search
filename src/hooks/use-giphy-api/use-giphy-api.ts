import {SearchResults} from '../../types/search-results';
import {settings} from '../../settings';
import {GiphySearchResponse} from '../../types/giphy-api/giphy-search-response';
import {GiphyImage} from '../../types/giphy-api/giphy-image';
import {FetchApiState} from '../../types/fetch-api-state';
import useFetchApi from '../use-fetch-api/use-fetch-api';

export default function useGiphyApi(query: string, page: number): FetchApiState<SearchResults> {
  const offset = (page - 1) * settings.imagesPerPage;
  const limit = settings.imagesPerPage;

  const state = useFetchApi<GiphySearchResponse>(`//api.giphy.com/v1/gifs/search?api_key=${settings.giphyApiKey}&q=${query}&offset=${offset}&limit=${limit}`);

  return {
    ...state,
    response: state.response ? mapApiResponse(state.response) : null,
  };

  function mapApiResponse(giphySearchResponse: GiphySearchResponse): SearchResults {
    return {
      numberOfPages: Math.ceil(giphySearchResponse.pagination.total_count / settings.imagesPerPage),
      images: giphySearchResponse.data.map((giphy: GiphyImage) => ({
        id: giphy.id,
        src: giphy.images.fixed_height.url,
        alt: giphy.title,
      }))
    };
  }
}