import React from 'react';
import PropTypes from 'prop-types';

import { itemShape } from 'scenes/FileDetail/propTypeShapes';
import TableRow from './components/TableRow/TableRow';

import './TableBody.css';

const propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(itemShape).isRequired
};

const TableBody = ({
  headers,
  items
}) => {
  return (
    <tbody className="TableBody">
      {items.map((item, i) => (
        <TableRow 
          key={i}
          headers={headers}
          item={item}
          even={i % 2 === 0}
        />
      ))}
    </tbody>
  );
};

TableBody.propTypes = propTypes;

export default TableBody;