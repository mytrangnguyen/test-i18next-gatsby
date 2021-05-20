import _ from 'lodash';
import { notification } from 'antd';
// import { loading, clearLoading } from '../redux/app/actions';
// import {
//   dismissInAppNoti,
//   showProgress,
// } from '../navigation/navigationActions';

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, (param) => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action,
) => {
  if (!action && !action.type) {
    return state;
  }
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

// export function* apiWrapper(
//   config = {isShowLoading: true, isShowSuccessNoti: false},
//   apiFunc,
//   ...params
// ) {
//   try {
//     // dismissInAppNoti();
//     if (config.isShowLoading) {
//       // showProgress();
//       // yield put(loading());
//     }
//     const response = yield call(apiFunc, ...params);
//     // yield put(clearLoading());
//     // showProgress(false);
//     return response;
//   } catch (error) {
//     // showProgress(false);
//     // yield put(clearLoading());
//     return error;
//   }
// }

export async function apiWrapper(
  options = {
    isShowLoading: true,
    isShowSuccess: false,
  },
  apiFunction,
  ...payload
) {
  try {
    if (options.isShowLoading) {
      // showProgress()
    }
    const response = await apiFunction(...payload);
    if (options.isShowLoading) {
      setTimeout(() => {
        // showProgress(false)
      }, 0);
    }
    if (options.isShowSuccess) {
      // showInAppNoti({
      //   title: null,
      //   content: options.successMessage,
      //   type: "success",
      // })

      notification.success({
        message: 'Thành công!',
        description:
          response.message ||
          options.successDescription ||
          'Bạn đã thực hiện thành công.',
      });
    }
    return response;
  } catch (error) {
    if (options.isShowLoading) {
      // showProgress(false)
    }
    // eslint-disable-next-line
    if (error?.code == 401) {
      // window.location = '/login';
    } else {
      notification.destroy();
      notification.error({
        message: 'Oops!',
        description: error.message || error || 'some thing wrong!',
      });
    }

    throw error;
  }
}

export const formattedData = (type, response, limit) => {
  switch (type) {
    case 'getAll':
      return {
        data: _.keyBy(response.results, 'id'),
        ids: _.map(response.results, (item) => item.id),
        count: response.total,
        pages: Math.floor(response.total / limit),
      };
    case 'getById':
      return response;
    default:
      return response;
  }
};
