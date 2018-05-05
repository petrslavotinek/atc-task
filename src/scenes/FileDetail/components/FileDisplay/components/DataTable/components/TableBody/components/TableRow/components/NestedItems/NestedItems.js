import React from 'react';
import PropTypes from 'prop-types';

import { kidShape } from 'scenes/FileDetail/propTypeShapes';
import DataTable from '../../../../../../DataTable';
import './NestedItems.css';

const propTypes = {
  kids: PropTypes.arrayOf(kidShape).isRequired
};

const NestedItems = ({
  kids
}) => {
  return (
    <React.Fragment>
      {kids.map(({ name, ...data }) => (
        <div key={name} className="NestedItem">
          <div className="NestedItem__title">{name}</div>
          <DataTable data={data} />
        </div>
      ))}
    </React.Fragment>
  );
};

NestedItems.propTypes = propTypes;

export default NestedItems;