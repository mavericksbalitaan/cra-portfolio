import { useState, useEffect } from 'react';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleWindowResize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(getWindowSize());
    });

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return windowSize;
}

export default useWindowSize;
