import { createMuiTheme } from '@material-ui/core/styles';

const JellyTheme = createMuiTheme({
  typography: {
   "fontFamily": "\"Raleway\", sans-serif",
   "fontSize": 14,
   "fontWeight": 500,
  },
  palette: {
    primary: {
      main: "#373a47",
      mainLight: "#4e4a46",
      mainShadeWhite: "#fffce1",
      mainShadeRed: "#c94e50",
      mainGrey: "#f5f5f5",
      textOnDark: "#b8b7ad",
      textOnLight: "#4e4a46"
    },
  }
});

export default JellyTheme