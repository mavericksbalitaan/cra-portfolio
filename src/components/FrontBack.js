import '../stylesheets/frontback.scss';
import { Code, Storage } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Frontend = () => (
  <div className="frontback__container">
    <div className="frontback__container--card">
      <Typography variant="h6">Frontend</Typography>
      <Code className="icon" />
    </div>
    <div className="frontback__container--card">
      <Typography variant="h6">Backend</Typography>
      <Storage className="icon" />
    </div>
  </div>
);

export default Frontend;
