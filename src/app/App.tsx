import React from 'react';
import './App.css';
import SearchForm from '../search-form/search-form';
import SearchResults from '../search-results/search-results';

interface Props {
}

interface State {
  query: string;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      query: '',
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(newQuery: string) {
    this.setState({
      query: newQuery,
    })
  }

  render() {
    return (
      <div>
        <h1>GIPHY image search</h1>
        <SearchForm query={this.state.query} onSearch={this.updateQuery}/>
        <SearchResults query={this.state.query}/>
      </div>
    );
  }
}