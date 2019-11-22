const GiphyApi = {
  fetchImages(query) {
    return fetch(`//api.giphy.com/v1/gifs/search?api_key=NvklHHolU7yM5ES8QV9TYPJzwtNQBld3&q=${query}`)
      .then((response) => response.json())
      .then((giphyResponse) => giphyResponse.data.map((giphy) => ({
        id: giphy.id,
        src: giphy.images.original.url,
        alt: giphy.title,
      })));
  }
};

export default GiphyApi;