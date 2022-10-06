import React from 'react';
import '../stylesheets/morebio.scss';
import { Button } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import nodejs from '../assets/images/nodejs.svg';
import react from '../assets/images/react.svg';
import express from '../assets/images/express.svg';
import Arrow from './Arrow';
import Skills from './Skills';
import GitHub from './GitHub';
import microverse from '../assets/images/full-stack-badge.webp';

function MoreBio() {
  return (
    <>
      <GitHub />
      <div className="morebio-container transition">
        <div className="morebio-content">
          <div className="seconddiv">
            <img
              src={nodejs}
              alt="nodejs"
              className="nodejs-logo"
              draggable="false"
            />
            <p>
              I have experience working in a fast-paced environment that
              required me to perform under pressure. This experience has honed
              my ability to be disciplined and organized in managing tasks
              effectively.
            </p>
          </div>
          <div className="firstdiv">
            <p>
              I have a strong interest in the tech industry, particularly in
              coding. Coding is one of my passions and I specialize in
              JavaScript and React.js for my projects.
            </p>
            <img
              src={react}
              alt="react"
              className="react-logo"
              draggable="false"
            />
            <br />
          </div>
          <div className="seconddiv">
            <img
              src={express}
              alt="express"
              className="express-logo"
              draggable="false"
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '1rem',
              }}
            />
            <p>
              I have experience building a range of projects, from single-page
              applications to APIs. I am committed to optimizing my code and
              continuously expanding my knowledge in full-stack web development.
            </p>
            <br />
          </div>
          <div className="firstdiv">
            <p>
              During my time in&nbsp;
              <span>
                <a
                  href="https://www.microverse.org/?grsf=chuqjk"
                  style={{ textDecoration: 'underline', color: 'inherit' }}
                >
                  <em>Microverse</em>
                </a>
              </span>
              , I had the opportunity to collaborate remotely with people from
              diverse cultural backgrounds. This experience allowed me to grow
              as an effective collaborator and taught me the value of working
              with a growth mindset. I am always eager to learn new things and
              approaches to enhance my skills.
              {' '}
            </p>
            <a
              href="https://www.credential.net/f0f6cb5c-fe82-4c7f-b9d7-88d206ac93e9"
              target="blank"
            >
              <img
                src={microverse}
                alt="microverse"
                className="microverse-full-stack-badge"
                draggable="false"
              />
            </a>
          </div>
        </div>
      </div>
      <Skills />
      <Arrow />
      <div className="center">
        <Button variant="contained" href="/projects" color="blue">
          Next Page
          <NavigateNext />
        </Button>
      </div>
    </>
  );
}

export default MoreBio;
