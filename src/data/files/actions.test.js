import actions from './actions';

describe('readFile actions', () => {
  it('should create request action', () => {
    const action = actions.readFile.request();
    expect(action).toEqual({
      type: 'files/READ/REQUEST',
      payload: {}
    });
  });

  it('should create success action', () => {
    const action = actions.readFile.success({ prop: 'value' });
    expect(action).toEqual({
      type: 'files/READ/SUCCESS',
      payload: {
        file: {
          prop: 'value'
        }
      }
    });
  });

  it('should create error action', () => {
    const action = actions.readFile.error({ prop: 'value' });
    expect(action).toEqual({
      type: 'files/READ/ERROR',
      payload: {
        error: {
          prop: 'value'
        }
      }
    });
  });
});

describe('loadFiles actions', () => {
  it('should create request action', () => {
    const action = actions.loadFiles.request();
    expect(action).toEqual({
      type: 'files/LOAD/REQUEST',
      payload: {}
    });
  });

  it('should create success action', () => {
    const action = actions.loadFiles.success([{ prop: 'value' }]);
    expect(action).toEqual({
      type: 'files/LOAD/SUCCESS',
      payload: {
        files: [{
          prop: 'value'
        }]
      }
    });
  });

  it('should create error action', () => {
    const action = actions.loadFiles.error({ prop: 'value' });
    expect(action).toEqual({
      type: 'files/LOAD/ERROR',
      payload: {
        error: {
          prop: 'value'
        }
      }
    });
  });
});

describe('deleteFile actions', () => {
  it('should create request action', () => {
    const action = actions.deleteFile.request();
    expect(action).toEqual({
      type: 'files/DELETE/REQUEST',
      payload: {}
    });
  });

  it('should create success action', () => {
    const action = actions.deleteFile.success(1);
    expect(action).toEqual({
      type: 'files/DELETE/SUCCESS',
      payload: {
        fileId: 1
      }
    });
  });

  it('should create error action', () => {
    const action = actions.deleteFile.error({ prop: 'value' });
    expect(action).toEqual({
      type: 'files/DELETE/ERROR',
      payload: {
        error: {
          prop: 'value'
        }
      }
    });
  });
});