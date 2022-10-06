import React from 'react';
import { nanoid } from 'nanoid';
import '../stylesheets/projects.scss';
import '../stylesheets/animation.scss';
import { Button } from '@mui/material';
import { ArrowCircleDown, NavigateNext } from '@mui/icons-material';
import projectobj from '../components/ProjectData';
import Cards from '../components/Cards';
import Arrow from '../components/Arrow';
import '../stylesheets/loader.scss';
// import ThreeProjects from './ThreeProjects';
import Loader from '../utils/Loader';

function Projects() {
  Loader();

  const scrollDown = () => {
    window.scrollBy({ top: 100, behavior: 'smooth' });
  };

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      {/* <ThreeProjects /> */}
      <h4 id="downarrow">
        <ArrowCircleDown fontSize="inherit" onClick={scrollDown} />
        <p>Scroll down</p>
      </h4>
      <div className="cards-container">
        {projectobj.length
          && projectobj.map((iter) => (
            <Cards
              key={nanoid()}
              title={iter.title}
              tags={iter.tags}
              image={iter.image}
              live={iter.live}
              source={iter.source}
              side={iter.side}
              text={iter.text}
            />
          ))}
      </div>
      <Arrow />
      <div className="center">
        <Button variant="contained" href="/recommendations" color="blue">
          Next Page
          <NavigateNext />
        </Button>
      </div>
    </>
  );
}

export default Projects;
