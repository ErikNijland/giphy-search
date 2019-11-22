import React from 'react';

interface Props {
  query: string;
  onSearch: (newQuery: string) => void,
}

interface State {
  newQuery: string;
}

export default class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      newQuery: this.props.query,
    };

    this.handleNewQueryChange = this.handleNewQueryChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleNewQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newQuery: event.target.value,
    });
  }

  search(event: React.FormEvent<HTMLFormElement>) {
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
