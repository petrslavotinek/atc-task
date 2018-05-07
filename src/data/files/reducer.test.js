import actions from './actions';
import reducer from './reducer';

describe('files reducer', () => {
  const file1 = {
    id: 1,
    name: 'file_1.json',
    date: new Date(2018, 0, 1, 12, 0, 0),
    data: {}
  };
  const file2 = {
    id: 2,
    name: 'file_2.json',
    date: new Date(2018, 0, 1, 13, 0, 0),
    data: {}
  };
  const defaultState = {
    readingFile: false,
    files: {},
    loadingFiles: false,
    error: null
  };

  it('should handle readFile request', () => {
    const action = actions.readFile.request();
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      readingFile: true
    });
  });

  it('should handle readFile success', () => {
    const action = actions.readFile.success(file1);
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      files: {
        '1': file1
      }
    });
  });

  it('should handle readFile error', () => {
    const action = actions.readFile.error('msg');
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      error: 'msg'
    });
  });

  it('should handle loadFiles request', () => {
    const action = actions.loadFiles.request();
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      loadingFiles: true
    });
  });

  it('should handle loadFiles success', () => {
    const action = actions.loadFiles.success({ '1': file1, '2': file2 });
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      files: {
        '1': file1,
        '2': file2
      }
    });
  });

  it('should handle loadFiles error', () => {
    const action = actions.loadFiles.error('msg');
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      error: 'msg'
    });
  });

  it('should handle deleteFile success', () => {
    const initialState = { files: { '1': file1, '2': file2 } };
    const action = actions.deleteFile.success('2');
    expect(reducer(initialState, action)).toEqual({
      ...defaultState,
      files: {
        '1': file1
      }
    });
  });
});