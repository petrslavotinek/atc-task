import { createAsyncType } from 'services/reduxUtils';

const LOAD_FILES = createAsyncType('files', 'LOAD');
const READ_FILE = createAsyncType('files', 'READ');
const DELETE_FILE = createAsyncType('files', 'DELETE');

export default {
  LOAD_FILES,
  READ_FILE,
  DELETE_FILE
};