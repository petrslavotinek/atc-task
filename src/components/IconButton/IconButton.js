import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import './IconButton.css';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

const IconButton = ({
  icon,
  onClick,
  className
}) => {
  return (
    <button
      className={classnames('IconButton', { [className]: className })}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

IconButton.propTypes = propTypes;

export default IconButton;