import PropTypes from 'prop-types';

export const kidShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.array.isRequired
});

export const itemShape = PropTypes.shape({
  data: PropTypes.object.isRequired,
  hasKids: PropTypes.bool.isRequired,
  kids: PropTypes.arrayOf(kidShape).isRequired
});

export const dataShape = PropTypes.shape({
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasItems: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(itemShape).isRequired
});

export const fileShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  data: dataShape.isRequired
});