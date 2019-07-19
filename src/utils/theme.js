import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
    error: {
      main: '#c15046',
    },
    formBackground: '#eceeef',
    formHeader: '#777777',
    primary: {
      main: '#1c7cd5',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export default theme;
