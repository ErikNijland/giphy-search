import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuery: this.props.query,
    };

    this.handleNewQueryChange = this.handleNewQueryChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleNewQueryChange(event) {
    this.setState({
      newQuery: event.target.value,
    });
  }

  search(event) {
    event.preventDefault();
    this.props.onSearch(this.state.newQuery);
  }

  render() {
    return (
      <form onSubmit={this.search}>
        <label>
          Search query
          <input value={this.state.newQuery} onChange={this.handleNewQueryChange} />
        </label>

        <button type="submit">Search</button>
      </form>
    );
  }
}
