import React from 'react';
import PropTypes from 'prop-types';
import DateTimeDisplay from 'components/DateTimeDisplay/DateTimeDisplay';

import './FileHeader.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
};

const FileHeader = ({
  name,
  date
}) => {
  return (
    <div className="FileHeader">
      <div className="FileHeader__name">
        {name}
      </div>
      <DateTimeDisplay date={date}>
        {date => <div className="FileHeader__date">{date}</div>}
      </DateTimeDisplay>
    </div>
  );
};

FileHeader.propTypes = propTypes;

export default FileHeader;