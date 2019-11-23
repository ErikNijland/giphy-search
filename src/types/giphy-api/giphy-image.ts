export interface GiphyImage {
  id: string;
  title: string;
  images: {
    fixed_height: {
      height: string;
      url: string;
      width: string;
    }
  };
}