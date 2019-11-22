import React from 'react';
import GiphyApi from "../giphy-api/giphy-api";

export default class SearchResults extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(this.props.query);
    }
  }

  search(query) {
    GiphyApi.fetchImages(query).then(console.log);
    console.log('go searching', query);
  }

  render() {
    return (
      <div>search results here please: {this.props.query}</div>
    );
  }
}