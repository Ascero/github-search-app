import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B59410',
      dark: '#A29415',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Afacad, sans-serif',
  },
});

export default theme;
