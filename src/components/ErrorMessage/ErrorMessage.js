import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.css';

const propTypes = {
  message: PropTypes.string.isRequired
};

const ErrorMessage = ({
  message
}) => {
  return (
    <div className="ErrorMessage">
      {message}
    </div>
  );
};

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;