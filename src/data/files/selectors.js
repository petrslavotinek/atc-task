import { createSelector } from 'reselect';

import { convertData } from 'services/dataConverter';

const filesSelector = state => state.files.files;

const isLoading = state => state.files.loadingFiles;

const isReading = state => state.files.readingFile;

const getFiles = createSelector(
  filesSelector,
  files => Object
    .values(files)
    .map(({ id, name, date }) => ({ id, name, date }))
);

const getFile = createSelector(
  filesSelector,
  files => (fileId) => {
    if (!(fileId in files)) {
      return null;
    }
    const { name, date, data } = files[fileId];
    return {
      name,
      date,
      data: convertData(data)
    };
  }
);

const getError = state => state.files.error;

export default {
  isLoading,
  isReading,
  getFiles,
  getFile,
  getError
};