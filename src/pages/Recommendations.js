import React from 'react';
import '../stylesheets/loader.scss';
import '../stylesheets/recommendations.scss';
import { Button } from '@mui/material';
import { Launch, ArrowCircleDown, NavigateNext } from '@mui/icons-material';
import { nanoid } from 'nanoid';
import Arrow from '../components/Arrow';
import profileobj from '../components/ProfileData';
import Loader from '../utils/Loader';
import ScrollAnimate from '../utils/ScrollAnimate';

function Recommendations() {
  Loader();
  ScrollAnimate();

  const scrollDown = () => {
    window.scrollBy({ top: 100, behavior: 'smooth' });
  };

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <h4 id="downarrow">
        <ArrowCircleDown fontSize="inherit" onClick={scrollDown} />
        <p>Scroll down</p>
      </h4>
      <div className="recom-container transition">
        {profileobj.length
          && profileobj.map((iter) => (
            <div className="recom-card reveal" key={nanoid()}>
              <img
                src={iter.profile_img}
                alt="manel"
                className="recom-img"
                draggable="false"
                loading="lazy"
              />
              <a
                href={iter.linkedin}
                className="recom-a"
                rel="noreferrer"
                target="_blank"
              >
                <h3 className="recom-hero">
                  {iter.name}
                  <Launch />
                </h3>
              </a>
              <h5 className="recom-sub">{iter.title}</h5>
              <p className="recom-text">
                {iter.recommend}
              </p>
            </div>
          ))}
      </div>
      <Arrow />
      <div className="center">
        <Button variant="contained" href="/contact" color="blue">
          Next Page
          <NavigateNext />
        </Button>
      </div>

    </>
  );
}

export default Recommendations;
