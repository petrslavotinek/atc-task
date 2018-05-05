import PropTypes from 'prop-types';

import { formatDateTime } from 'services/dateUtils';

const propTypes = {
  culture: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  children: PropTypes.func
};

const defaultProps = {
  culture: 'cs-CZ',
  date: new Date()
};

const DateTimeDisplay = ({
  date,
  culture,
  children
}) => {
  const formatted = formatDateTime(date, culture);
  return children
    ? children(formatted)
    : formatted;
};

DateTimeDisplay.propTypes = propTypes;
DateTimeDisplay.defaultProps = defaultProps;

export default DateTimeDisplay;