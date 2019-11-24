import {IGiphyImageSource} from './giphy-image-source';

export interface IGiphyImage {
  id: string;
  title: string;
  images: {
    fixed_height_small: IGiphyImageSource;
    fixed_height: IGiphyImageSource;
  };
}
