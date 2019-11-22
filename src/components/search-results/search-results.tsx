import React from 'react';
import GiphyApi from '../../services/giphy-api/giphy-api';
import Spinner from '../spinner/spinner';
import {Image} from "../../types/image";

interface Props {
  query: string;
}

interface State {
  images?: Image[];
  isLoading: boolean;
  numberOfPages?: number;
}

export default class SearchResults extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.query !== prevProps.query) {
      this.search(this.props.query);
    }
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

  private search(query: string): void {
    const hasQuery = query.trim().length > 0;

    this.setState({
      isLoading: hasQuery,
    });

    if (!hasQuery) {
      return;
    }

    GiphyApi
      .fetchImages(query)
      .then(
        (searchResults) => {
          this.setState({
              ...searchResults,
            isLoading: false,
          });
        },
        (_) => {
          // Todo
        }
      );
  }
}