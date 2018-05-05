import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FileSelection from './components/FileSelection/FileSelection';
import ListItems from './components/ListItems/ListItems';
import { fileOperations, fileSelectors } from 'data/files';
import { listItemShape } from 'scenes/FilesList/propTypeShapes';
import './FilesList.css'
import ErrorInfo from './components/ErrorInfo/ErrorInfo';

const mapState = (state) => ({
  files: fileSelectors.getFiles(state),
  error: fileSelectors.getError(state)
});

const mapDispatch = {
  readFile: fileOperations.readFile,
  deleteFile: fileOperations.deleteFile
};

class FilesList extends Component {

  static propTypes = {
    readFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(listItemShape).isRequired,
    error: PropTypes.string
  }

  handleFileSelect = (e) => {
    const { readFile } = this.props;
    const file = e.target.files[0];
    file && readFile(file);
  }

  handleFileDelete = (fileId) => {
    const { deleteFile } = this.props;
    deleteFile(fileId);
  }

  render() {
    const { files, error } = this.props;
    return (
      <div className="FilesList">
        <FileSelection
          onFileSelect={this.handleFileSelect}
        />
        {error && <ErrorInfo error={error} />}
        <ListItems
          files={files}
          deleteFile={this.handleFileDelete}
        />
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(FilesList);