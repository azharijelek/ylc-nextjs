import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ed1b33',
    },
    secondary: {
      main: '#FAB837',
    },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#fff',
    },
  },
});

export default theme;