import React from 'react';
import { connect } from 'react-redux';

import { fileSelectors } from 'data/files';
import { fileShape } from 'scenes/FileDetail/propTypeShapes';
import FileNotFoundInfo from './components/FileNotFoundInfo/FileNotFoundInfo';
import SectionHeader from './components/SectionHeader/SectionHeader';
import FileDisplay from './components/FileDisplay/FileDisplay';

const propTypes = {
  file: fileShape
};

const mapState = (state, { match: { params: { id } } }) => ({
  file: fileSelectors.getFile(state)(id)
});

const FileDetail = ({
  file
}) => {
  return (
    <React.Fragment>
      <SectionHeader />
      {file
        ? <FileDisplay file={file} />
        : <FileNotFoundInfo />
      }
    </React.Fragment>
  );
}

FileDetail.propTypes = propTypes;

export default connect(mapState)(FileDetail);