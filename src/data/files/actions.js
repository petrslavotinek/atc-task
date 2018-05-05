import types from './types';
import { createAction } from 'services/reduxUtils';

const readFile = {
  request: () => createAction(types.READ_FILE.REQUEST),
  success: (file) => createAction(types.READ_FILE.SUCCESS, { file }),
  error: (error) => createAction(types.READ_FILE.ERROR, { error })
};

const loadFiles = {
  request: () => createAction(types.LOAD_FILES.REQUEST),
  success: (files) => createAction(types.LOAD_FILES.SUCCESS, { files }),
  error: (error) => createAction(types.LOAD_FILES.ERROR, { error })
};

const deleteFile = {
  request: () => createAction(types.DELETE_FILE.REQUEST),
  success: (fileId) => createAction(types.DELETE_FILE.SUCCESS, { fileId }),
  error: (error) => createAction(types.DELETE_FILE.ERROR, { error })
}

export default {
  readFile,
  loadFiles,
  deleteFile
};