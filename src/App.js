import React from 'react';
import './App.css';
import SearchForm from "./search-form/search-form";
import SearchResults from "./search-results/search-results";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'poep',
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(newQuery) {
    this.setState({
      query: newQuery,
    })
  }

  render() {
    return (
      <div>
        <h1>GIPHY image search</h1>
        <SearchForm query={this.state.query} onSearch={this.updateQuery} />
        <SearchResults query={this.state.query} />

        Query: {this.state.query}
      </div>
    );
  }
}