import { createSelector } from 'reselect';

export class CRUDSelectors {
  constructor(resource) {
    this.resource = resource;
  }

  getRestData = (state, props) =>
    props?.defaultOptions?.rootResource
      ? state[props?.defaultOptions?.rootResource][this.resource]
      : state[this.resource];

  getDefaultValue = (state, props) =>
    props.location && (!props.location.hash || props.location.hash === '#')
      ? decodeURI(props.location.search.substring(1)).trim()
      : props.location.hash.match(`#${this.resource}/create?(.*)`)?.[1];

  getDefaultFromProps = (state, props) => props.defaultValue;

  getDataArr = createSelector([this.getRestData], (resources) => {
    const { data, ids } = resources;
    return ids.map((id) => data[id]);
  });

  getTotal = createSelector([this.getRestData], (resources) => {
    const { total } = resources;
    return total;
  });

  getDefaultCreateData = createSelector(
    [this.getDefaultValue, this.getDefaultFromProps],
    (defaultValue, defaultValueFromProps) => defaultValueFromProps || {},
  );

  getCurrentData = createSelector([this.getRestData], (resources = {}) => {
    const { currentData, data } = resources;
    return data[currentData?.id]
      ? { ...data[currentData?.id], ...currentData }
      : currentData || {};
  });

  getLoadingCurrentRecord = createSelector(
    [this.getRestData],
    (resources = {}) => {
      const { currentId, itemLoadings } = resources;
      return itemLoadings[currentId];
    },
  );

  enabledLoadMore = createSelector([this.getRestData], (resources) => {
    const { loading, numberOfPages, page } = resources;
    return !loading && page <= numberOfPages;
  });

  getLoading = createSelector(
    [this.getRestData],
    (resources = { loading: false }) => {
      const { loading } = resources;
      return loading;
    },
  );

  getCreateLoading = createSelector(
    [this.getRestData],
    (resources = { createLoading: false }) => {
      const { createLoading } = resources;
      return createLoading;
    },
  );

  getError = createSelector([this.getRestData], (resources) => {
    const { error } = resources;
    return error;
  });

  getFilters = createSelector([this.getRestData], (resources) => {
    const { limit, offset, filter, total, orderBy, q } = resources;
    return { limit, offset, filter, total, orderBy, q };
  });
}

export const crudSelectors = new CRUDSelectors();

export default CRUDSelectors;
