import { useState, useEffect } from 'react';

function useMode() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    if (mode) {
      document.querySelector('body').classList.add('light');
      document.querySelector('body').classList.remove('dark');
    } else {
      document.querySelector('body').classList.add('dark');
      document.querySelector('body').classList.remove('light');
    }
  }, [mode]);

  return { mode, setMode, handleMode };
}

export default useMode;
