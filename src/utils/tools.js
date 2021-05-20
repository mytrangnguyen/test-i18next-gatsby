import moment from 'moment';
import { isEmpty, reduce, debounce } from 'lodash';

export const trimCommaString = (text) => {
  // eslint-disable-next-line
  return text ? text.replace(/(^\,+|\,+$)/gm, '') : null;
};

export const formatMoney = (num, digits = 3) => {
  if (!num) return '0 VND';

  if (Number.isNaN(num)) return '0 VND';
  const re = `\\B(?=(\\d{${digits}})+(?!\\d))`;
  return `${String(num).replace(new RegExp(re, 'g'), ',')} VND`;
};

export const formatDateFromNow = (date) => {
  if (moment().isAfter(date)) {
    return moment(date).fromNow();
  }
  return 'Just now';
};

export const formatTimeOpening = (time) =>
  time ? moment(time).format('HH:mm') : '';

export const formatDateTimeEvent = (time) =>
  time ? moment(time).format('MMMM Do, YYYY') : null;

const searchAsyncRequest = (func, callback) => (data) => {
  func(data).then((res) => callback(res));
};

export const searchAsync = (func, callback) => {
  let task = null;
  if (task) {
    task.cancel();
  }
  task = debounce(searchAsyncRequest(func, callback), 500, {});
  return task;
};

// TODO: hasNotch
// export const hasNotch = DeviceInfo.hasNotch();

const getValidDataOfObj = (obj, isFilter) => {
  const validData = reduce(
    obj,
    (result, value, key) => {
      if (Array.isArray(value)) {
        return value.length > 0 ? { ...result, [key]: value } : result;
      }
      if (typeof value === 'object' && !isEmpty(value)) {
        const formatChildValue = getValidDataOfObj(value);
        return !isEmpty(formatChildValue)
          ? { ...result, [key]: formatChildValue }
          : result;
      }

      if (value || value === false || value === 0) {
        // eslint-disable-next-line
        result[key] = value;
        return { ...result, [key]: value };
      }

      if (value === '' && !isFilter) {
        // eslint-disable-next-line
        result[key] = ' ';
      }
      return result;
    },
    {},
  );
  return validData;
};

export const convertObjToSearchStr = (params) =>
  Object.keys(params)
    .map((key) =>
      params[key] !== undefined && params[key] !== null
        ? `${encodeURIComponent(key)}=${params[key]}`
        : '',
    )
    .filter((data) => data !== '')
    .join('&');

export const getValidData = (filter, isFilter) =>
  getValidDataOfObj(filter, isFilter) || {};

export const formatCuisines = (cuisines, data) =>
  data
    ?.map((e) => cuisines[e]?.name)
    .join(',')
    .toUpperCase();

export function HaversineDistance(lat1, lon1, lat2, lon2) {
  if (typeof Number.prototype.toRad === 'undefined') {
    // eslint-disable-next-line
    Number.prototype.toRad = function () {
      return (this * Math.PI) / 180;
    };
  }
  const R = 6371; // in km
  const x1 = lat2 - lat1;
  const dLat = x1.toRad();
  const x2 = lon2 - lon1;
  const dLon = x2.toRad();
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1.0;
}
