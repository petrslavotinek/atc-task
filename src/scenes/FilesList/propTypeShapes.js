import PropTypes from 'prop-types';

export const listItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
});