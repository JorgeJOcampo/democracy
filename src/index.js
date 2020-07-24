import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as SessionProvider } from './context/firebaseContext';
// import { Provider as TodosProvider } from './todos/context';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
