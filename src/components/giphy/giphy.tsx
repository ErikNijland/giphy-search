import React from 'react';
import {Image} from '../../types/image';

export default function Giphy (props: Image) {
  return (
    <img
      width={ props.width }
      height={ props.height }
      src={ props.src }
      alt={ props.alt }
    />
  );
}