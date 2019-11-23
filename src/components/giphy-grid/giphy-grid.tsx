import React from 'react';
import './giphy-grid.css';
import {Image} from '../../types/image';
import Giphy from '../giphy/giphy';

interface Props {
  images: Image[];
}

export default function GiphyGrid (props: Props) {
  return (
    <div className="GiphyGrid">
      {props.images.map((image) =>
        <Giphy key={image.id} { ...image } />
      )}
    </div>
  );
}