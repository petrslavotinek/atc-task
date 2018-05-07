import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import FileInput from './FileInput';

describe('FileInput component', () => {
  it('should render', () => {
    expect(renderer.create(
      <FileInput label="Choose file" id="1" />
    ).toJSON()).toMatchSnapshot();
  });

  it('should have correct label', () => {
    expect(mount(
      <FileInput label="Choose file" id="1" />
    ).find('label').text()).toBe(' Choose file');
  });
});