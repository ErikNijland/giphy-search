import {GiphyRating} from "./giphy-api/giphy-rating";

export interface ISettings {
  giphyApiKey: string;
  imagesPerPage: number;
  rating: GiphyRating;
}
