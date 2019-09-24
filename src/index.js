import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';

import App from './components/App';
// import createStore from './store';

import './styles/index.scss';

// const { PUBLIC_PATH } = process.env;

// const history = createBrowserHistory({ basename: PUBLIC_PATH });
// const store = createStore({ history });

const render = Component => {
  ReactDOM.render(
    <Router>
      <Component></Component>
    </Router>,
    document.getElementById('root'),
  );
};

render(App);
