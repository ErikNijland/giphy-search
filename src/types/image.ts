import {IImageSource} from "./image-source";

export interface IImage {
  alt: string;
  id: string;
  formats: {
    small: IImageSource;
    large: IImageSource;
  };
}
