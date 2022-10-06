import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#fff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          margin: '1rem',
        },
      },
    },
  },
  palette: {
    blue: {
      light: '#fff',
      main: '#254A86',
      dark: '#333',
    },
    green: {
      light: '#fff',
      main: '#5A9D3D',
      dark: '#333',
    },
  },
});

export default theme;
