import React from 'react';
import GiphyApi from '../../giphy-api/giphy-api';
import Spinner from '../spinner/spinner';
import {Image} from "../../types/image";

interface Props {
  query: string;
}

interface State {
  images: Image[];
  isLoading: boolean;
}

export default class SearchResults extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      images: [],
      isLoading: false,
    }
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

  private search(query: string) {
    const hasQuery = query.trim().length > 0;

    this.setState({
      images: [],
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
}