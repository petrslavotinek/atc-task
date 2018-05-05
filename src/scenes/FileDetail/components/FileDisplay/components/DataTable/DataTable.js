import React from 'react';

import { dataShape } from 'scenes/FileDetail/propTypeShapes';
import TableHead from './components/TableHead/TableHead';
import TableBody from './components/TableBody/TableBody';
import './DataTable.css';

const propTypes = {
  data: dataShape.isRequired
};

const DataTable = ({
  data
}) => {
  return (
    <div className="DataTable">
      <table className="DataTable__table">
        <TableHead headers={data.headers} />
        <TableBody
          headers={data.headers}
          items={data.items}
        />
      </table>
    </div>
  );
};

DataTable.propTypes = propTypes;

export default DataTable;