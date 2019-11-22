export interface GiphyImage {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    }
  };
}