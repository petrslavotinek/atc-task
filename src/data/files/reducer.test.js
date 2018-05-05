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

  test('handles readFile request', () => {
    const action = actions.readFile.request();
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      readingFile: true
    });
  });

  test('handles readFile success', () => {
    const action = actions.readFile.success(file1);
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      files: {
        '1': file1
      }
    });
  });

  test('handles readFile error', () => {
    const action = actions.readFile.error('msg');
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      error: 'msg'
    });
  });

  test('handles loadFiles request', () => {
    const action = actions.loadFiles.request();
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      loadingFiles: true
    });
  });

  test('handles loadFiles success', () => {
    const action = actions.loadFiles.success({ '1': file1, '2': file2 });
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      files: {
        '1': file1,
        '2': file2
      }
    });
  });

  test('handles loadFiles error', () => {
    const action = actions.loadFiles.error('msg');
    expect(reducer({}, action)).toEqual({
      ...defaultState,
      error: 'msg'
    });
  });

  test('handles deleteFile success', () => {
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