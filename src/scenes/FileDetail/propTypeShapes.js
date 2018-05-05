import PropTypes from 'prop-types';

export const kidShape = PropTypes.shape({
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
});

export const itemShape = PropTypes.shape({
  data: PropTypes.object.isRequired,
  hasKids: PropTypes.bool.isRequired,
  kids: PropTypes.arrayOf(kidShape).isRequired
});

export const dataShape = PropTypes.shape({
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(itemShape).isRequired
});

export const fileShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  data: dataShape.isRequired
});