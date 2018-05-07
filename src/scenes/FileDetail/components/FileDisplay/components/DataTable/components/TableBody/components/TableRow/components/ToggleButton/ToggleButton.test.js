import React from 'react';
import renderer from 'react-test-renderer';

import ToggleButton from './ToggleButton';

describe('ToggleButton component', () => {
  it('should render', () => {
    expect(renderer.create(
      <ToggleButton open={true} onClick={() => {}} />
    ).toJSON()).toMatchSnapshot();
  });
});