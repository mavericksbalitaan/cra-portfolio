import KickstoreImg from '../assets/images/kickstore.webp';
import TravelMapImg from '../assets/images/travelmap.webp';
import TaskifyImg from '../assets/images/taskify.webp';
import ISSImg from '../assets/images/wtissa.webp';
import MovieInfoImg from '../assets/images/movieinfo.webp';
import PrimeImg from '../assets/images/primeweb.webp';
import CountryImg from '../assets/images/countryweb.webp';
import PokemonImg from '../assets/images/pokemonweb.webp';
import PortfolioImg from '../assets/images/portfolioweb.webp';
import AsiaImg from '../assets/images/asiaweb.webp';
import SpaceImg from '../assets/images/spaceweb.webp';
import BookstoreImg from '../assets/images/bookstoreweb.webp';
import MathImg from '../assets/images/mathweb.webp';
import TodoImg from '../assets/images/todoweb.webp';
import MessageImg from '../assets/images/messageweb.webp';
import PokemonTrackerImg from '../assets/images/pokemontrackerweb.webp';
import LeaderImg from '../assets/images/leaderweb.webp';
import RecipeImg from '../assets/images/recipeweb.webp';
import BudgetImg from '../assets/images/budgetweb.webp';

const projectobj = [
  {
    title: 'Kickstore',
    tags: ['React', 'MUI', 'Sass'],
    image: KickstoreImg,
    live: 'https://kickstore.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/kickstore',
    side: 'left',
    text: 'Kickstore allows you to select your favorite sneakers and update your shopping cart.',
  },
  {
    title: 'Travel Map',
    tags: ['TypeScript', 'React', 'MUI'],
    image: TravelMapImg,
    live: 'https://travel-map.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/travel-map',
    side: 'right',
    text: 'Travel Map helps you visualize how well-travelled you are.',
  },
  {
    title: 'Taskify',
    tags: ['TypeScript', 'React', 'MUI'],
    image: TaskifyImg,
    live: 'https://taskify.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/taskify',
    side: 'left',
    text: 'Taskify lets you update tasks whether they are active or completed.',
  },
  {
    title: 'ISS Tracker',
    tags: ['JavaScript', 'API', 'Sass'],
    image: ISSImg,
    live: 'https://wtissa.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/wtissa',
    side: 'right',
    text: 'ISS Tracker displays the current location of the International Space Station.',
  },
  {
    title: 'Movie Info',
    tags: ['JavaScript', 'API', 'Sass'],
    image: MovieInfoImg,
    live: 'https://movieinfo.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/movieinfoapp',
    side: 'left',
    text: 'Movie Info lets you search for any movie, display information fetched from a public API.',
  },
  {
    title: 'Prime Shows HD',
    tags: ['JavaScript', 'API', 'Sass'],
    image: PrimeImg,
    live: 'https://primeshows.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/capstone02',
    side: 'right',
    text: 'Prime Shows HD lets you search, rate, review and leave comments for your favorite shows.',
  },
  {
    title: 'Country App',
    tags: ['React', 'API', 'Google Maps'],
    image: CountryImg,
    live: 'https://country.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/country-app',
    side: 'left',
    text: 'Country App displays information about every country in the world.',
  },
  {
    title: 'Pokemon App',
    tags: ['React', 'Redux Toolkit', 'Sass'],
    image: PokemonImg,
    live: 'https://pokemon.mavericks-db.com/',
    source: 'https://github.com/mavericks-db/capstone03',
    side: 'right',
    text: 'Pokemon App displays a list of available pokemons.',
  },
  {
    title: 'Portfolio',
    tags: ['JavaScript', 'Webpack', 'Sass'],
    image: PortfolioImg,
    live: 'https://mavericks-db.github.io/portfolio/dist',
    source: 'https://github.com/mavericks-db/portfolio',
    side: 'left',
    text: 'Portfolio is based on a Figma template.',
  },
  {
    title: 'Asia Web Conf',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: AsiaImg,
    live: 'https://mavericks-db.github.io/capstone01/',
    source: 'https://github.com/mavericks-db/capstone01',
    side: 'right',
    text: 'Asia Web Conf is based on a Behance template.',
  },
  {
    title: "Space Traveler's Hub",
    tags: ['React', 'Redux Toolkit', 'API'],
    image: SpaceImg,
    live: 'https://mavericks-db.github.io/space-travelers-hub/',
    source: 'https://github.com/mavericks-db/space-travelers-hub',
    side: 'left',
    text: "Space Traveler's Hub allows you to book rockets and join selected space missions.",
  },
  {
    title: 'Bookstore CMS',
    tags: ['React', 'Redux Toolkit', 'JavaScript'],
    image: BookstoreImg,
    live: 'https://mavericks-db.github.io/bookstore/',
    source: 'https://github.com/mavericks-db/bookstore',
    side: 'right',
    text: 'Bookstore CMS allows you to display a list of books, add and remove a book.',
  },
  {
    title: 'Math Magicians',
    tags: ['React', 'Single-Page App', 'JavaScript'],
    image: MathImg,
    live: 'http://mavericks-db.github.io/math-magicians/',
    source: 'https://github.com/mavericks-db/math-magicians',
    side: 'left',
    text: 'Math Magicians allows you to make simple calculations and generate a random math-related quote.',
  },
  {
    title: 'Todo-List',
    tags: ['JavaScript', 'Webpack', ' localStorage'],
    image: TodoImg,
    live: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    source: 'https://github.com/mavericks-db/todo-list',
    side: 'right',
    text: 'Todo-List lists your tasks and mark them when completed.',
  },
  {
    title: 'Message Board',
    tags: ['Express', 'MySQL', 'React'],
    image: MessageImg,
    live: 'https://message-board-client.up.railway.app/',
    source: 'https://github.com/mavericks-db/message-board',
    side: 'left',
    text: 'Message Boards stores your notes or anything you put on it.',
  },
  {
    title: 'Pokemon League Tracker',
    tags: ['Express.JS', 'MySQL Database', 'React.JS'],
    image: PokemonTrackerImg,
    live: 'https://pokemon-tracker-client.up.railway.app/',
    source: 'https://pokemon-tracker-server.up.railway.app/',
    side: 'right',
    text: 'Pokemon League Tracker tracks the league your pokemons will participate in.',
  },
  {
    title: 'Leaderboard',
    tags: ['JavaScript', 'Webpack', 'API'],
    image: LeaderImg,
    live: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    source: 'https://github.com/mavericks-db/leaderboard',
    side: 'left',
    text: 'Leaderboard displays scores submitted by different players.',
  },
  {
    title: 'Recipe App',
    tags: ['Ruby on Rails', 'PostgreSQL', 'API'],
    image: RecipeImg,
    live: 'https://app-recipe-on-rails.herokuapp.com/',
    source: 'https://github.com/mavericks-db/RecipeOnRails',
    side: 'right',
    text: 'Recipe App tracks of all your recipes, ingredients, and inventory.',
  },
  {
    title: 'Budget App',
    tags: ['Ruby on Rails', 'PostgreSQL', 'API'],
    image: BudgetImg,
    live: 'https://app-budget-on-rails.herokuapp.com/',
    source: 'https://github.com/mavericks-db/BudgetOnRails',
    side: 'left',
    text: 'Budget App displays the list of transactions associated with a category.',
  },
];

export default projectobj;
