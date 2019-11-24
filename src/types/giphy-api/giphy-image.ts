export interface IGiphyImage {
  id: string;
  title: string;
  images: {
    fixed_height: {
      height: string;
      url: string;
      width: string;
      mp4: string;
      webp: string;
    },
  };
}
