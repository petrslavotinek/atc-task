import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const propTypes = {
  error: PropTypes.string.isRequired
};

const ErrorInfo = ({
  error
}) => {
  return (
    <ErrorMessage message={error} />
  );
};

ErrorInfo.propTypes = propTypes;

export default ErrorInfo;