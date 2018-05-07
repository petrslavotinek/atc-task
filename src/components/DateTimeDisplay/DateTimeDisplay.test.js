import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import DateTimeDisplay from './DateTimeDisplay';

window.requestAnimationFrame = function(callback) {
  var currentTime = +new Date;
  targetTime = Math.max(targetTime + 16, currentTime);
  var timeoutCb = function() { callback(+new Date); }
  return window.setTimeout(timeoutCb, targetTime - currentTime);
};

describe('DateTimeDisplay component', () => {
  it('should return string', () => {
    const dateTime = renderer.create(
      <DateTimeDisplay date={new Date(2018, 0, 1)} />
    ).toJSON();
    expect(dateTime).toBe('2018-1-1 00:00:00');
  });

  it('should render children', () => {
    expect(shallow(
      <DateTimeDisplay date={new Date(2018, 0, 1)}>
        {(date) => (<div>{date}</div>)}
      </DateTimeDisplay>
    ).exists('<div>2018-1-1 00:00:00</div>')).toBeTruthy();
  });
});