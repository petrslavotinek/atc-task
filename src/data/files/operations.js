import actions from './actions';
import { readJsonFile } from 'services/fileReader';
import history from 'services/history';

import db from 'data/db';

const readFile = (file) => async (dispatch) => {
  dispatch(actions.readFile.request());

  try {
    const jsonFile = await readJsonFile(file);
    const id = await db.table('files').add(jsonFile);
    dispatch(actions.readFile.success(jsonFile));
    history.push(`/detail/${id}`);
  } catch (error) {
    dispatch(actions.readFile.error(error));
  }
};

const loadFiles = () => async (dispatch) => {
  dispatch(actions.loadFiles.request());

  try {
    const filesArr = await db.table('files').toArray();
    const files = filesArr
      .reduce((res, file) => ({
        ...res,
        [file.id]: file
      }), {});
    dispatch(actions.loadFiles.success(files));
  } catch (error) {
    dispatch(actions.loadFiles.error(error));
  }
};

const deleteFile = (fileId) => async (dispatch) => {
  dispatch(actions.deleteFile.request());

  try {
    await db.table('files').delete(fileId);
    dispatch(actions.deleteFile.success(fileId));
  } catch (error) {
    dispatch(actions.deleteFile.error(error));
  }
};

export default {
  readFile,
  loadFiles,
  deleteFile
};