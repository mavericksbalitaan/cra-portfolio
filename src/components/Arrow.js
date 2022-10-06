import React, { useEffect, useState } from 'react';
import '../stylesheets/arrow.scss';
import { ArrowUpward } from '@mui/icons-material';
import { Button } from '@mui/material';

function Arrow() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="arrow-container">
      {show && (
        <Button variant="contained" onClick={clickHandler} color="blue">
          <ArrowUpward />
        </Button>
      )}
    </div>
  );
}

export default Arrow;
