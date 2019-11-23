import {ScreenSize} from '../../types/screen-size';
import {useEffect, useState} from 'react';

export default function useScreenSize (): ScreenSize {
  const [ screenSize, setScreenSize ] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  });

  function getScreenSize () {
    return window.matchMedia('(max-width: 1000px)').matches ? 'small' : 'large';
  }

  function updateScreenSize() {
    setScreenSize(getScreenSize());
  }

  return screenSize;
}