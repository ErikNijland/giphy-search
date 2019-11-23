import {settings} from "../../settings";
import {IFetchApiState} from "../../types/fetch-api-state";
import {IGiphyImage} from "../../types/giphy-api/giphy-image";
import {IGiphySearchResponse} from "../../types/giphy-api/giphy-search-response";
import {ISearchResults} from "../../types/search-results";
import useFetchApi from "../use-fetch-api/use-fetch-api";

export default function useGiphyApi(query: string, page: number): IFetchApiState<ISearchResults> {
  const offset = (page - 1) * settings.imagesPerPage;
  const limit = settings.imagesPerPage;

  const state = useFetchApi<IGiphySearchResponse>(`//api.giphy.com/v1/gifs/search?api_key=${settings.giphyApiKey}&q=${query}&offset=${offset}&limit=${limit}`);

  return {
    ...state,
    response: state.response ? mapApiResponse(state.response) : null,
  };

  function mapApiResponse(giphySearchResponse: IGiphySearchResponse): ISearchResults {
    return {
      images: giphySearchResponse.data.map((giphy: IGiphyImage) => ({
        alt: giphy.title,
        height: giphy.images.fixed_height.height,
        id: giphy.id,
        src: giphy.images.fixed_height.url,
        width: giphy.images.fixed_height.width,
      })),
      numberOfPages: Math.ceil(giphySearchResponse.pagination.total_count / settings.imagesPerPage),
    };
  }
}
