import selectors from './selectors';

describe('selector functions', () => {
  const state = {
    files: {
      loadingFiles: false,
      readingFile: true,
      files: {
        '1': {
          id: 1,
          name: 'file_1.json',
          date: new Date(2018, 0, 1, 12, 0, 0),
          data: { prop: 'value' }
        },
        '2': {
          id: 2,
          name: 'file_2.json',
          date: new Date(2018, 0, 1, 13, 0, 0),
          data: [{
            data: {
              prop1: 'value1'
            },
            kids: {}
          }]
        }
      },
      error: 'msg'
    }
  };

  test('gets isLoading', () => {
    const isLoading = selectors.isLoading(state);
    expect(isLoading).toBeFalsy();
  });

  test('gets isReading', () => {
    const isReading = selectors.isReading(state);
    expect(isReading).toBeTruthy();
  });

  test('gets files', () => {
    const files = selectors.getFiles(state);
    expect(files).toEqual([{
      id: 1,
      name: 'file_1.json',
      date: new Date(2018, 0, 1, 12, 0, 0)
    }, {
      id: 2,
      name: 'file_2.json',
      date: new Date(2018, 0, 1, 13, 0, 0)
    }])
  });

  test('gets file', () => {
    const file = selectors.getFile(state)(2);
    expect(file).toEqual({
      name: 'file_2.json',
      date: new Date(2018, 0, 1, 13, 0, 0),
      data: {
        headers: ['prop1'],
        items: [{
          data: {
            prop1: 'value1'
          },
          hasKids: false,
          kids: []
        }]
      }
    });
  });

  test('gets error', () => {
    const error = selectors.getError(state);
    expect(error).toBe('msg');
  });
});