import PropTypes from 'prop-types';
import '../stylesheets/cards.scss';
import '../stylesheets/animation.scss';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';
import ScrollAnimate from '../utils/ScrollAnimate';

function Cards({
  title, tags, image, live, source, side, text,
}) {
  ScrollAnimate();

  return (
    <>
      {side === 'left' ? (
        <div className="projects-wrapper reveal">
          <div className="projects-card fade-in-left">
            <div className="projects-left-div">
              <h1 className="projects-h1">{title}</h1>
              <div className="para-text">
                <p>{text}</p>
              </div>
              <div className="projects-tag-group">
                {tags.length
                  && tags.map((tag) => (
                    <h5 key={nanoid()} className="projects-tag">
                      {tag}
                    </h5>
                  ))}
              </div>
              <div className="projects-buttons">
                <Button
                  variant="contained"
                  href={live}
                  target="_blank"
                  color="blue"
                >
                  Demo &nbsp;
                  <Launch />
                </Button>
                <Button
                  variant="contained"
                  href={source}
                  target="_blank"
                  color="green"
                >
                  Source &nbsp;
                  <GitHub />
                </Button>
              </div>
            </div>
            <div className="image-wrapper">
              <a href={live} target="_blank" rel="noreferrer">
                <img
                  src={image}
                  alt={title}
                  className="projects-image"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="projects-wrapper reveal">
          <div className="projects-card fade-in-right">
            <div className="projects-left-div">
              <h1 className="projects-h1">{title}</h1>
              <div className="para-text">
                <p>{text}</p>
              </div>
              <div className="projects-tag-group">
                {tags.length
                  && tags.map((tag) => (
                    <h5 key={nanoid()} className="projects-tag">
                      {tag}
                    </h5>
                  ))}
              </div>
              <div className="projects-buttons">
                <Button
                  variant="contained"
                  href={live}
                  target="_blank"
                  color="blue"
                >
                  Demo &nbsp;
                  <Launch />
                </Button>
                <Button
                  variant="contained"
                  href={source}
                  target="_blank"
                  color="green"
                >
                  Source &nbsp;
                  <GitHub />
                </Button>
              </div>
            </div>
            <div className="image-wrapper">
              <a href={live} target="_blank" rel="noreferrer">
                <img
                  src={image}
                  alt={title}
                  className="projects-image"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Cards;
