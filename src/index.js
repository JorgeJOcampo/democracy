import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { Provider as SessionProvider } from './context/firebaseContext';
import { GlobalStyle, theme, Container } from './styles';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SessionProvider>
      <Container>
        <App />
      </Container>
    </SessionProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
