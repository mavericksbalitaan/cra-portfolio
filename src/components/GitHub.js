import '../stylesheets/github.scss';
import {
  PeopleAlt, Apartment, Room, Mail,
} from '@mui/icons-material';
import '../stylesheets/animation.scss';
import '../stylesheets/loader.scss';
import GitHubCalendar from 'react-github-calendar';
import useFetch from '../hooks/useFetch';

function GitHub() {
  const github = useFetch('https://api.github.com/users/mavericks-db');

  return (
    <>
      {github ? (
        <>
          <div className="github-container transition">
            <div className="github-wrapper">
              <img
                src={github.avatar_url}
                alt="github-avatar"
                className="github-avatar"
                draggable="false"
              />
              <h4 className="github-name">{github.name}</h4>
              <a
                className="github-login"
                href="https://github.com/mavericks-db"
              >
                {github.login}
              </a>
              <h4 className="github-bio">{github.bio}</h4>
              <h4 className="github-bio">
                <PeopleAlt />
                {' '}
                {github.followers}
                {' '}
                followers &middot;
                {' '}
                {github.following}
                {' '}
                following
              </h4>
              <h4 className="github-text">
                <Apartment />
                {' '}
                {github.company}
              </h4>
              <h4 className="github-text">
                <Room />
                {' '}
                {github.location}
              </h4>
              <h4 className="github-text">
                <Mail />
                {' '}
                balitaanmavericks@gmail.com
              </h4>
            </div>
            <div className="github-calendar">
              <GitHubCalendar username="mavericks-db" />
            </div>
          </div>
        </>
      ) : (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
    </>
  );
}

export default GitHub;
