import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  it('should render', () => {
    expect(renderer.create(
      <ErrorMessage message="my message" />
    ).toJSON()).toMatchSnapshot();
  })
});