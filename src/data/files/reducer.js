import { combineReducers } from 'redux';

import { createReducer } from 'services/reduxUtils';
import types from './types';

const readingFile = createReducer(false)({
  [types.READ_FILE.REQUEST]: () => true,
  [types.READ_FILE.SUCCESS]: () => false,
  [types.READ_FILE.ERROR]: () => false
});

const files = createReducer({})({
  [types.READ_FILE.SUCCESS]: (state, { payload: { file } }) => ({
    ...state,
    [`${file.id}`]: file
  }),
  [types.LOAD_FILES.SUCCESS]: (state, { payload: { files } }) => ({
    ...state,
    ...files
  }),
  [types.DELETE_FILE.SUCCESS]: (state, { payload: { fileId } }) => {
    const key = `${fileId}`;
    const { [key]: value, ...newState } = state;
    return newState;
  }
});

const loadingFiles = createReducer(false)({
  [types.LOAD_FILES.REQUEST]: () => true,
  [types.LOAD_FILES.SUCCESS]: () => false,
  [types.LOAD_FILES.ERROR]: () => false
});

const error = createReducer(null)({
  [types.LOAD_FILES.REQUEST]: () => null,
  [types.LOAD_FILES.SUCCESS]: () => null,
  [types.LOAD_FILES.ERROR]: (state, { payload: { error } }) => error,
  [types.READ_FILE.REQUEST]: () => null,
  [types.READ_FILE.SUCCESS]: () => null,
  [types.READ_FILE.ERROR]: (state, { payload: { error } }) => error
});

export default combineReducers({
  readingFile,
  files,
  loadingFiles,
  error
});