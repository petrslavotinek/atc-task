import React from 'react';
import PropTypes from 'prop-types';

import './TableHead.css';

const propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired
};

const TableHead = ({
  headers
}) => {
  return (
    <thead className="TableHead">
      <tr>
        <th></th>
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = propTypes;

export default TableHead;