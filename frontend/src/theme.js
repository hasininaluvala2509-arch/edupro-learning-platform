import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // blue
    },
    secondary: {
      main: '#f50057', // pink
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    h2: {
      marginBottom: '1rem',
    },
  },
});

export default theme;
