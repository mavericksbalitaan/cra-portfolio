import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Recommendations from './pages/Recommendations';
import MoreBio from './components/MoreBio';
import ModeContext from './contexts/ModeContext';
import useMode from './hooks/useMode';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<About />} />
      <Route path="about" element={<MoreBio />} />
      <Route path="projects" element={<Projects />} />
      <Route path="recommendations" element={<Recommendations />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);

const App = () => (
  <>
    <ModeContext.Provider value={useMode(false)}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ModeContext.Provider>
  </>
);

export default App;
