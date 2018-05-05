import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './SectionHeader.css';

const SectionHeader = () => {
  return (
    <div className="SectionHeader">
      <NavLink to="/" className="SectionHeader__link">
        <FontAwesomeIcon icon="arrow-circle-left" className="SectionHeader__link__icon" />
        Back to list
      </NavLink>
    </div>
  );
};

export default SectionHeader;