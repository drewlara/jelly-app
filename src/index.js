import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@material-ui/styles';
import JellyTheme from './styles';

import App from './components/App';

ReactDOM.render(
  <ThemeProvider theme={JellyTheme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
