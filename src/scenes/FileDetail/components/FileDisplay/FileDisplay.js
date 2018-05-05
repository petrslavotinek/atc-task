import React from 'react';
import { fileShape } from 'scenes/FileDetail/propTypeShapes';
import FileHeader from './components/FileHeader/FileHeader';
import DataTable from './components/DataTable/DataTable';

const propTypes = {
  file: fileShape.isRequired
};

const FileDisplay = ({
  file: {
    name,
    date,
    data
  }
}) => {
  return (
    <React.Fragment>
      <FileHeader 
        name={name}
        date={date}
      />
      <DataTable 
        data={data}
      />
    </React.Fragment>
  );
};

FileDisplay.propTypes = propTypes;

export default FileDisplay;