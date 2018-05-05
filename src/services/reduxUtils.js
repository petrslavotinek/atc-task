export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const createAsyncType = (prefix, base) =>
  [REQUEST, SUCCESS, ERROR].reduce((res, type) => ({
    ...res,
    [type]: `${prefix}/${base}/${type}`
  }), {});

export const createReducer = (initialState) => (reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];
  return reducer
    ? reducer(state, action)
    : state;
};

export const createAction = (type, payload = {}) => ({
  type,
  payload
});