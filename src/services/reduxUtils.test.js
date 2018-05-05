import { createAsyncType, createAction, createReducer } from './reduxUtils';

test('creates async types', () => {
  const type = createAsyncType('myPrefix', 'myBase');
  expect(type.REQUEST).toBe('myPrefix/myBase/REQUEST');
  expect(type.SUCCESS).toBe('myPrefix/myBase/SUCCESS');
  expect(type.ERROR).toBe('myPrefix/myBase/ERROR');
});

test('creates action', () => {
  const action = createAction('myType', { prop: 'value' });
  expect(action).toEqual({
    type: 'myType',
    payload: { prop: 'value' }
  });
});

test('creates action with default payload', () => {
  const action = createAction('myType');
  expect(action).toEqual({
    type: 'myType',
    payload: {}
  });
});

test('creates reducer', () => {
  const reducer = createReducer()({
    'INCREASE': (state) => ({
      ...state,
      counter: state.counter + 1
    })
  });
  const state = { counter: 1 };
  const action = { type: 'INCREASE' };
  const newState = reducer(state, action);
  expect(newState).toEqual({ counter: 2 });
});