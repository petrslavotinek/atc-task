import React from 'react';
import renderer from 'react-test-renderer';

import IconButton from './IconButton';

describe('IconButton component', () => {
  it('should render', () => {
    expect(renderer.create(
      <IconButton icon="caret-down" />
    ).toJSON()).toMatchSnapshot();
  });
});