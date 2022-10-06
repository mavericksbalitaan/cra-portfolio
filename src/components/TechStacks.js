import '../stylesheets/techstacks.scss';
import html5 from '../assets/images/html5.svg';
import css3 from '../assets/images/css3.svg';
import js from '../assets/images/js.svg';
import typescript from '../assets/images/typescript.svg';
import neovim from '../assets/images/neovim.svg';
import sass from '../assets/images/sass.svg';
import mongodb from '../assets/images/mongodb.svg';
import mysql from '../assets/images/mysql.svg';
import swagger from '../assets/images/swagger.svg';
import webpack from '../assets/images/webpack.svg';
import git from '../assets/images/git.svg';
import jest from '../assets/images/jest.svg';

const TechStacks = () => (
  <>
    <div className="techstacks-container transition">
      <img src={html5} alt="html5" className="logo-left" draggable="false" />
      <img src={css3} alt="css3" className="logo-right" draggable="false" />
      <img src={js} alt="js" className="logo-left" draggable="false" />
      <img src={typescript} alt="typescript" className="logo-right" draggable="false" />
      <img src={neovim} alt="neovim" className="logo-left" draggable="false" />

      <img src={sass} alt="sass" className="logo-right" draggable="false" />
      <img src={mongodb} alt="mongodb" className="logo-left" draggable="false" />
      <img
        src={mysql}
        alt="mysql"
        className="logo-right"
        draggable="false"
      />

      <img
        src={swagger}
        alt="swagger"
        className="logo-left"
        draggable="false"
      />
      <img
        src={webpack}
        alt="webpack"
        className="logo-right"
        draggable="false"
      />
      <img
        src={git}
        alt="git"
        className="logo-left"
        draggable="false"
      />
      <img src={jest} alt="jest" className="logo-right" draggable="false" />
    </div>
  </>
);

export default TechStacks;
