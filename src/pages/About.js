import { useContext, useEffect } from 'react';
import '../stylesheets/about.scss';
import { Button } from '@mui/material';
import { FileDownload, Chat } from '@mui/icons-material';
import Clock from '../components/Clock';
import '../stylesheets/animation.scss';
import '../stylesheets/loader.scss';
import ModeContext from '../contexts/ModeContext';
import Loader from '../utils/Loader';
import bg from '../assets/images/bg.webp';
import bglight from '../assets/images/bglight.webp';
import cv from '../assets/files/cv.pdf';

function About() {
  const { mode } = useContext(ModeContext);
  Loader();

  const downloadHandler = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Mavericks.Balitaan.pdf';
    link.click();
  };

  useEffect(() => {
    if (mode) {
      document.querySelector(
        '.about-container',
      ).style.backgroundImage = `url(${bglight})`;
      document.querySelector('#myname').classList.add('myname--light');
      document.querySelector('#myname').classList.remove('myname--dark');
    } else {
      document.querySelector(
        '.about-container',
      ).style.backgroundImage = `url(${bg})`;
      document.querySelector('#myname').classList.remove('myname--light');
      document.querySelector('#myname').classList.add('myname--dark');
    }
  });

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <div className="about-container">
        <div className="title transition">
          <p>Hi 👋, I am</p>
          <p id="myname">MAVERICKS</p>
          <p id="subhero">
            I&apos;m a full-stack web developer with a passion for creating
            high-quality web applications. I am well-versed in using popular web
            development frameworks and tools such as React, Node.js, Express,
            and MongoDB.
          </p>
          <Button variant="contained" onClick={downloadHandler} color="blue">
            Download CV &nbsp;
            <FileDownload />
          </Button>
          <Button
            variant="contained"
            color="green"
            sx={{ margin: '1rem' }}
            href="/contact"
          >
            Contact Me &nbsp;
            <Chat />
          </Button>
        </div>
      </div>
      <Clock />
    </>
  );
}

export default About;
