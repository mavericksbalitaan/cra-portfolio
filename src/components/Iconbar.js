import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaLinkedin,
  FaGithub,
  // FaTwitter,
  // FaAngellist,
  FaMedium,
  // FaDocker,
} from 'react-icons/fa';
import '../stylesheets/iconbar.scss';
import '../stylesheets/animation.scss';

const Iconbar = () => (
  <>
    <div className="iconbar slide-in-left">
      {/* <a */}
      {/*   href="https://twitter.com/mavericks_db" */}
      {/*   target="blank" */}
      {/*   rel="noreferrer" */}
      {/* > */}
      {/*   <IconContext.Provider value={{ className: 'icon' }}> */}
      {/*     <FaTwitter /> */}
      {/*   </IconContext.Provider> */}
      {/* </a> */}
      <a
        href="https://www.linkedin.com/in/mavericks-db/"
        target="blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: 'icon' }}>
          <FaLinkedin />
        </IconContext.Provider>
      </a>
      <a href="https://github.com/mavericks-db" target="blank" rel="noreferrer">
        <IconContext.Provider value={{ className: 'icon' }}>
          <FaGithub />
        </IconContext.Provider>
      </a>
      {/* <a */}
      {/*   href="https://hub.docker.com/u/mavericksdb" */}
      {/*   target="blank" */}
      {/*   rel="noreferrer" */}
      {/* > */}
      {/*   <IconContext.Provider value={{ className: 'icon' }}> */}
      {/*     <FaDocker /> */}
      {/*   </IconContext.Provider> */}
      {/* </a> */}

      {/* <a href="https://angel.co/u/mavericks-db" target="blank" rel="noreferrer"> */}
      {/*   <IconContext.Provider value={{ className: 'icon' }}> */}
      {/*     <FaAngellist /> */}
      {/*   </IconContext.Provider> */}
      {/* </a> */}
      <a
        href="https://medium.com/@mavericks-db"
        target="blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: 'icon' }}>
          <FaMedium />
        </IconContext.Provider>
      </a>
    </div>
  </>
);

export default Iconbar;
