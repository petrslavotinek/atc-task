import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from 'scenes/App/App';

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const Root = ({
  history,
  store
}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

Root.propTypes = propTypes;

export default Root;