const GiphyApi = {
  fetchImages(query) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=NvklHHolU7yM5ES8QV9TYPJzwtNQBld3&q=${query}`)
      .then((response) => response.json());
  }
};

export default GiphyApi;