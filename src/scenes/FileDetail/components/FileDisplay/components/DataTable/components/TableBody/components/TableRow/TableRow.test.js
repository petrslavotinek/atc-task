import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TableRow from './TableRow';

describe('TableRow component', () => {
  const data = {
    headers: ['prop1'],
    hasItems: true,
    items: [{
      data: {
        'prop1': 'value1'
      },
      hasKids: true,
      kids: [{
        name: 'kid1',
        headers: ['prop2'],
        items: [{
          data: {
            'prop2': 'value2'
          },
          hasKids: false,
          kids: []
        }]
      }]
    }, {
      data: {
        'prop1': 'value1'
      },
      hasKids: false,
      kids: []
    }]
  };

  beforeAll(() => {
    Object.defineProperty(React, 'Fragment', {
      configurable: true,
      value: ({ children }) => (
        <table>
          <tbody>
            {Array.isArray(children)
              ? children.map(el => el)
              : children}
          </tbody>
        </table>
      )
    });
  });

  afterAll(() => {
    Reflect.deleteProperty(React, 'Fragment');
  });

  it('should render', () => {
    expect(renderer.create(
      <TableRow
        headers={data.headers}
        item={data.items[0]}
        even={false}
      />
    ).toJSON()).toMatchSnapshot();
  });

  it('should not render toggle button when having no kids', () => {
    expect(mount(
      <TableRow
        headers={data.headers}
        item={data.items[1]}
        even={false}
      />
    ).find('td button').length).toBe(0);
  });

  it('should render toggle button when having kids', () => {
    expect(mount(
      <TableRow
        headers={data.headers}
        item={data.items[0]}
        even={false}
      />
    ).find('td button').length).toBe(1);
  });

  it('should be collapsed', () => {
    expect(mount(
      <TableRow
        headers={data.headers}
        item={data.items[0]}
        even={false}
      />
    ).find('tr').length).toBe(1);
  });

  it('should toggle', () => {
    const row = shallow(
      <TableRow
        headers={data.headers}
        item={data.items[0]}
        even={false}
      />
    );

    expect(row.find('tr').length).toBe(1);

    // open
    row.find('ToggleButton').simulate('click');
    expect(row.find('tr').length).toBe(2);

    // collapse
    row.find('ToggleButton').simulate('click');
    expect(row.find('tr').length).toBe(1);
  });
});