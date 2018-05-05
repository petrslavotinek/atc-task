import { isDefined, isArray, isObject } from 'services/utils';

export const convertData = (data) => {
  if (!isDefined(data)) {
    return {
      headers: [],
      items: []
    };
  }

  if (!isArray(data)) {
    data = [data];
  }

  data = getValidItems(data);

  return {
    headers: collectHeaders(data),
    items: convertItems(data)
  };
};

const collectHeaders = (data) => [...new Set(data.reduce((headers, { data }) => {
  return [
    ...headers,
    ...Object.keys(data)
  ];
}, []))];

const getValidItems = (data) => data.filter(isValidItem);

const convertItems = (data) => data.map(convertItem);

const isValidItem = (item) => isDefined(item)
  && isDefined(item.data)
  && isObject(item.data)
  && isDefined(item.kids)
  && isObject(item.kids);

const convertItem = ({ data, kids }) => {
  const convertedKids = convertKids(kids);
  return {
    data,
    kids: convertedKids,
    hasKids: convertedKids.length > 0
  };
};

const convertKids = (kids) => {
  const props = Object.entries(kids);
  if (!props.length) {
    return [];
  }

  return props
    .filter(([, value]) => isValidKid(value))
    .map(([key, { records }]) => ({
      name: key,
      ...convertData(records)
    }))
};

const isValidKid = (kid) => isDefined(kid) && isArray(kid.records);