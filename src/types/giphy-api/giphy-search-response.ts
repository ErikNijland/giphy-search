import {GiphyImage} from './giphy-image';

export interface GiphySearchResponse {
  data: GiphyImage[];
  pagination: {
    total_count: number;
  }
}