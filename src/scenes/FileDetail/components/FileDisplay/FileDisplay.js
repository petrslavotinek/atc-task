import React from 'react';
import { fileShape } from 'scenes/FileDetail/propTypeShapes';
import FileHeader from './components/FileHeader/FileHeader';
import DataTable from './components/DataTable/DataTable';
import InvalidDataInfo from './components/InvalidDataInfo/InvalidDataInfo';

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
      {data.hasItems
        ?
        <DataTable
          data={data}
        />
        : <InvalidDataInfo />
      }
    </React.Fragment>
  );
};

FileDisplay.propTypes = propTypes;

export default FileDisplay;