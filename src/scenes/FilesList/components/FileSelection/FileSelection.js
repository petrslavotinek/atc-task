import React from 'react';
import PropTypes from 'prop-types';

import FileInput from 'components/form/FileInput/FileInput';

const propTypes = {
  onFileSelect: PropTypes.func.isRequired
};

const FileSelection = ({
  onFileSelect
}) => (
    <FileInput
      onChange={onFileSelect}
    />
  );

FileSelection.propTypes = propTypes;

export default FileSelection;