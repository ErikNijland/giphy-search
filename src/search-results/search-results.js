import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    return (
      <div>search results here please: {this.props.query}</div>
    );
  }
}