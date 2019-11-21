import React from 'react';

export default class SearchResults extends React.Component {
  componentDidMount() {
    this.search(this.props.query);
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(this.props.query);
    }
  }

  search(query) {
    console.log('go searching', query);
  }

  render() {
    return (
      <div>search results here please: {this.props.query}</div>
    );
  }
}