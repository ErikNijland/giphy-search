import {IGiphyImage} from "./giphy-image";

export interface IGiphySearchResponse {
  data: IGiphyImage[];
  pagination: {
    total_count: number;
  };
}
