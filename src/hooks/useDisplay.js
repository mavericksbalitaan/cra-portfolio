import { useState } from 'react';

function useDisplay() {
  const [display, setDisplay] = useState('none');

  const handleDisplay = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  return { display, setDisplay, handleDisplay };
}

export default useDisplay;
