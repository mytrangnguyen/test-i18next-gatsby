import { keyBy, omit } from 'lodash';
import { getValidData } from '../../utils/tools';

export const PRIMARY_KEY = 'id';

export const convertRequestParams = (
  type,
  params,
  // resource
  // options = { primaryKey: PRIMARY_KEY }
) => {
  const { q, ...rest } = params.filter || { q: undefined };
  const formatedParams = {
    ...params,
    filter: rest,
    q,
    count: undefined,
    pageSize: undefined,
    page: undefined,
    // orderBy:
    //   params?.orderBy === null ? undefined : params?.orderBy || '-createdAt',
  };
  const filter = getValidData(formatedParams.filter, true);
  switch (type) {
    case 'GET_ALL':
      return getValidData({
        ...getValidData(formatedParams),
        filter:
          Object.keys(filter).length > 0 ? JSON.stringify(filter) : undefined,
      });
    case 'GET_BY_ID':
      return {
        ...params,
        [PRIMARY_KEY]: Number(params[PRIMARY_KEY]),
      };
    case 'EDIT':
      return getValidData(omit(params, 'id'));
    case 'CREATE':
      return getValidData(params);
    case 'DELETE':
    default:
      return {};
  }
};

export const convertResponseData = (
  type,
  response,
  options = { primaryKey: PRIMARY_KEY },
) => {
  switch (type) {
    case 'GET_ALL':
      // eslint-disable-next-line
      const list = Array.isArray(response) ? response : response.results;
      return {
        data: keyBy(
          list.map((data) => ({
            ...data,
            [options.primaryKey]: data[options.primaryKey || PRIMARY_KEY],
            backupId: data[PRIMARY_KEY],
          })),
          options.primaryKey || PRIMARY_KEY,
        ),
        ids: list.map((data) => data[options.primaryKey || PRIMARY_KEY]),
        total: response?.total || list.length,
      };
    case 'GET_BY_ID':
    case 'CREATE':
      return response
        ? {
            ...response,
            [options.primaryKey]: response[options.primaryKey || PRIMARY_KEY],
          }
        : null;
    case 'EDIT':
      return response && response ? { ...response } : null;
    case 'DELETE':
    default:
      return response;
  }
};
