import React from 'react';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const InvalidDataInfo = () => {
  return (
    <ErrorMessage message="File does not contain any valid items" />
  );
};

export default InvalidDataInfo;