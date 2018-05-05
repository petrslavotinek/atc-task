import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { itemShape } from 'scenes/FileDetail/propTypeShapes';
import ToggleButton from './components/ToggleButton/ToggleButton';
import NestedItems from './components/NestedItems/NestedItems';
import './TableRow.css';

class TableRow extends Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    item: itemShape.isRequired,
    even: PropTypes.bool.isRequired
  }

  state = {
    open: false
  }

  handleToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { headers, item: { data, hasKids, kids }, even } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <tr className={classnames('TableRow', { 'TableRow--even': even, 'TableRow--odd': !even })}>
          <td>{hasKids && <ToggleButton open={open} onClick={this.handleToggle} />}</td>
          {headers.map(header => (
            <td key={header}>{data[header]}</td>
          ))}
        </tr>
        {open && <tr className="TableRow__nested">
          <td colSpan={headers.length + 1}>
            <NestedItems kids={kids} />
          </td>
        </tr>}
      </React.Fragment>
    );
  }
}

export default TableRow;