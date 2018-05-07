import { createAsyncType, createAction, createReducer } from './reduxUtils';

describe('reduxUtils', () => {
  it('should create async types', () => {
    const type = createAsyncType('myPrefix', 'myBase');
    expect(type.REQUEST).toBe('myPrefix/myBase/REQUEST');
    expect(type.SUCCESS).toBe('myPrefix/myBase/SUCCESS');
    expect(type.ERROR).toBe('myPrefix/myBase/ERROR');
  });

  it('should create action', () => {
    const action = createAction('myType', { prop: 'value' });
    expect(action).toEqual({
      type: 'myType',
      payload: { prop: 'value' }
    });
  });

  it('should create action with default payload', () => {
    const action = createAction('myType');
    expect(action).toEqual({
      type: 'myType',
      payload: {}
    });
  });

  it('should create reducer', () => {
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
});