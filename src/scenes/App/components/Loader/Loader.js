import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './Loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <FontAwesomeIcon icon="spinner" spin size="3x" />
    </div>
  );
};

export default Loader;