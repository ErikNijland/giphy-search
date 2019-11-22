import SearchForm from '../../components/search-form/search-form';
import SearchResults from '../../components/search-results/search-results';
import React from 'react';

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
        <SearchForm query={this.state.query} onSearch={this.updateQuery}/>
        <SearchResults query={this.state.query}/>
      </div>
    );
  }
}