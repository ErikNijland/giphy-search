import {ISearchResults} from '../../types/search-results';
import {settings} from '../../settings';
import {IGiphySearchResponse} from '../../types/giphy-api/giphy-search-response';
import {IGiphyImage} from '../../types/giphy-api/giphy-image';
import {IGiphyImageSource} from '../../types/giphy-api/giphy-image-source';
import {IImageSource} from '../../types/image-source';
import {useEffect, useState} from 'react';

export default function useSimpleFetch(query: string, page: number): ISearchResults {
  const [ images, setImages ] = useState();

  useEffect(() => {
    if (query === '') {
      setImages({
        numberOfPages: 0,
        images: [],
      });
      return;
    }

    const offset = (page - 1) * settings.imagesPerPage;
    const limit = settings.imagesPerPage;

    fetch(`//api.giphy.com/v1/gifs/search?api_key=${settings.giphyApiKey}&q=${query}&offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((giphySearchResponse) => mapApiResponse(giphySearchResponse))
      .then(setImages);

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
  }, [ query, page ]);

  return images;

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