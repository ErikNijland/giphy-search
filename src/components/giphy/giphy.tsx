import React, {useState} from 'react';
import {Image} from '../../types/image';
import './giphy.css';

export default function Giphy (props: Image) {
  const [ classNames, setClassNames ] = useState(['Giphy', 'Giphy--Loading']);

  function removeLoadingClass () {
    setClassNames(classNames.filter((className) => className !== 'Giphy--Loading'));
  }

  return (
    <div className={classNames.join(' ')}>
      <img
        className="Giphy__Image"
        width={ props.width }
        height={ props.height }
        src={ props.src }
        alt={ props.alt }
        onLoad={removeLoadingClass}
      />
    </div>
  );
}