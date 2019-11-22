import React from 'react';
import GiphyApi from '../giphy-api/giphy-api';
import Spinner from '../spinner/spinner';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null,
      isLoading: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(this.props.query);
    }
  }

  search(query) {
    const hasQuery = query.trim().length > 0;

    this.setState({
      images: null,
      isLoading: hasQuery,
    });

    if (!hasQuery) {
      return;
    }

    GiphyApi
      .fetchImages(query)
      .then(
        (images) => {
          this.setState({
            images,
            isLoading: false,
          });
        },
        (_) => {
          // Todo
        }
      );
  }

  render() {
    return (
      <div>
        {this.state.isLoading &&
        <Spinner/>
        }

        {this.state.images && this.state.images.map((image) =>
          <img key={image.id} src={image.src} alt={image.alt}/>
        )}
      </div>
    );
  }
}