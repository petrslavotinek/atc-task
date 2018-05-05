import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { listItemShape } from 'scenes/FilesList/propTypeShapes';
import IconButton from 'components/IconButton/IconButton';
import DateTimeDisplay from 'components/DateTimeDisplay/DateTimeDisplay';
import './ListItem.css';

const propTypes = {
  file: listItemShape.isRequired,
  deleteFile: PropTypes.func.isRequired
};

const ListItem = ({
  file: {
    id,
    name,
    date
  },
  deleteFile
}) => {
  return (
    <div className="ListItem">
      <div className="ListItem__props">
        <NavLink className="ListItem__link" to={`/detail/${id}`}>
          <FontAwesomeIcon icon={['far', 'file']} className="ListItem__icon" />
          {name}
        </NavLink>
        <DateTimeDisplay date={date}>
          {formattedDate => <div className="ListItem__date">{formattedDate}</div>}
        </DateTimeDisplay>
      </div>
      <IconButton
        icon={['far', 'trash-alt']}
        onClick={() => deleteFile(id)}
        className="ListItem__delete"
      />
    </div>
  );
};

ListItem.propTypes = propTypes;

export default ListItem;