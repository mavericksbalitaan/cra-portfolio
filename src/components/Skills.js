import '../stylesheets/skills.scss';
import TechStacks from './TechStacks';
import '../stylesheets/techstacks.scss';
import '../stylesheets/animation.scss';

const JsonData = {
  Technical_Skills: [
    {
      Front_End: ['React.js', 'React Router', 'Material UI', 'Bootstrap'],
      Languages: ['JavaScript', 'HTML5', 'CSS3', 'Sass'],
    },
    {
      Back_End: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'RubyOnRails',
      ],
      Languages: ['JavaScript', 'NoSQL', 'SQL', 'Ruby'],
    },
    { Testing_Libraries: ['Jest', 'RSpec'] },
    { Development_Tools: ['Git', 'Webpack', 'Parcel'] },
  ],
};

const JsonData2 = {
  Deployment_Methods: [
    'AWS',
    'Vercel',
    'GitHub_Pages',
    'Netlify',
  ],
  Editor: 'Neovim',
  Code_Practice: [
    'GitFlow',
    'GitHub_Flow',
    {
      Linters: ['Webhint', 'ESLint', 'Stylelint', 'Rubocop'],
    },
    {
      API_Tools: ['Swagger', 'Postman'],
    },
  ],
  Soft_Skills: {
    Professional: [
      'Pair_Programming',
      'Teamwork',
      'Time_Management',
      'Communication',
    ],
  },
  Roles: ['Teaching_Assistant', 'Code_Reviewer', 'Student_Mentor'],
};

function Skills() {
  function scrollanimate() {
    const reveal = document.querySelector('.reveal');
    const windowHeight = window.innerHeight;
    const eltop = reveal.getBoundingClientRect().top;
    const elvisible = 150;
    if (eltop < windowHeight - elvisible) {
      reveal.classList.add('revealactive');
    } else {
      reveal.classList.remove('revealactive');
    }
  }

  window.addEventListener('scroll', scrollanimate);

  return (
    <>
      <div className="skills-container reveal">
        <div className="skills-json transition">
          <div key={JsonData}>
            <pre>{JSON.stringify(JsonData, null, 2)}</pre>
          </div>
        </div>
        <TechStacks />
        <div className="skills-json transition">
          <div key={JsonData2}>
            <pre>{JSON.stringify(JsonData2, null, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
