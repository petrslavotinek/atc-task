import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/IconButton/IconButton';

const propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const ToggleButton = ({
  open,
  onClick
}) => {
  return (
    <IconButton onClick={onClick} icon={(open ? 'caret-down' : 'caret-right')} />
  );
};

ToggleButton.propTypes = propTypes;

export default ToggleButton;