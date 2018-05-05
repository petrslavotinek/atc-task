import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import cuid from 'cuid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './FileInput.css';

const propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

const defaultProps = {
  label: 'Choose a file...',
  id: cuid()
}

const FileInput = ({
  onChange,
  className,
  label,
  id
}) => {
  return (
    <div className={classnames('FileInput', { [className]: className })}>
      <input className="FileInput__input" type="file" id={id} onChange={onChange} />
      <label className="FileInput__label" htmlFor={id}>
        <FontAwesomeIcon icon="cloud-upload-alt" /> {label}
      </label>
    </div>
  );
};

FileInput.propTypes = propTypes;
FileInput.defaultProps = defaultProps;

export default FileInput;