import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import './styles/index.scss';

const render = Component => {
  ReactDOM.render(
    <Router>
      <Component></Component>
    </Router>,
    document.getElementById('root'),
  );
};

render(App);
