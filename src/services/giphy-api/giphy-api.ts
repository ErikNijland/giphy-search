import {GiphySearchResponse} from '../../types/giphy-api/giphy-search-response';
import {GiphyImage} from '../../types/giphy-api/giphy-image';
import {SearchResults} from '../../types/search-results';
import {settings} from '../../settings';

const GiphyApi = {
  fetchImages(query: string): Promise<SearchResults> {
    return fetch(`//api.giphy.com/v1/gifs/search?api_key=NvklHHolU7yM5ES8QV9TYPJzwtNQBld3&q=${query}`)
      .then((response) => response.json())
      .then((giphyResponse: GiphySearchResponse) => ({
        numberOfPages: Math.ceil(giphyResponse.pagination.total_count / settings.imagesPerPage),
        images: giphyResponse.data.map((giphy: GiphyImage) => ({
          id: giphy.id,
          src: giphy.images.fixed_height.url,
          alt: giphy.title,
        }))
      }));
  }
};

export default GiphyApi;