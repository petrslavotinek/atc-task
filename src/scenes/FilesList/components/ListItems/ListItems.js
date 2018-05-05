import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './components/ListItem/ListItem';
import EmptyListInfo from './components/EmptyListInfo/EmptyListInfo';
import { listItemShape } from 'scenes/FilesList/propTypeShapes';

const propTypes = {
  files: PropTypes.arrayOf(listItemShape).isRequired,
  deleteFile: PropTypes.func.isRequired
};

const ListItems = ({
  files,
  deleteFile
}) => (
    <React.Fragment>
      {files.length > 0
        ? files.map(file => (
          <ListItem
            key={file.id}
            file={file}
            deleteFile={deleteFile}
          />
        ))
        : <EmptyListInfo />
      }
    </React.Fragment>
  );

ListItems.propTypes = propTypes;

export default ListItems;