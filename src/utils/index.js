import cookies from 'js-cookie';
import { getCookie, setCookie, removeCookie } from './cookie';

const STORAGE_KEY = 'session-token';
const DEALER_SUBDOMAIN_KEY = 'dealer-subdomain';

export function getToken(ctx) {
  if (ctx) return getCookie(STORAGE_KEY, ctx.req);
  return cookies.get(STORAGE_KEY);
}

export function setToken(token) {
  setCookie(STORAGE_KEY, token);
}

export function deleteToken() {
  removeCookie(STORAGE_KEY);
}

export function getDealerSubdomain(ctx) {
  if (ctx) return getCookie(DEALER_SUBDOMAIN_KEY, ctx.req);
  return cookies.get(DEALER_SUBDOMAIN_KEY);
}

export function setDealerSubdomain(subDomain) {
  setCookie(DEALER_SUBDOMAIN_KEY, subDomain);
}

export function deleteDealerSubdomain() {
  removeCookie(DEALER_SUBDOMAIN_KEY, { path: '' });
}

export const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const STEP_GUTTER = 4;

export const gutters = {
  custom: (size) => STEP_GUTTER * size,
  xxxs: STEP_GUTTER,
  xxs: STEP_GUTTER * 2,
  xs: STEP_GUTTER * 3,
  sm: STEP_GUTTER * 4,
  md: STEP_GUTTER * 5,
  lg: STEP_GUTTER * 6,
  xl: STEP_GUTTER * 7,
  xxl: STEP_GUTTER * 8,
  xxxl: STEP_GUTTER * 9,
};

export const round10 = (number) => Math.round(number * 10) / 10;

export const formatWorkingTime = (time) => ({
  monday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  tuesday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  wednesday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  thursday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  friday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  saturday: {
    isOpen: !!time?.includes('saturday'),
    openTime: 0,
    closeTime: 0,
  },
  sunday: {
    isOpen: !!time?.includes('sunday'),
    openTime: 0,
    closeTime: 0,
  },
});

export const formatWorkingTimeDisplay = (time = {}) => {
  const output = [];
  Object.keys(time).forEach((key) => {
    if (time[key].isOpen && ['sunday', 'saturday'].includes(key)) {
      output.push(key);
    }
    if (time[key].isOpen && key === 'monday') {
      output.push('workingTimeOnWeek');
    }
  });
  return output;
};

export const getSubdomainFromCtx = (ctx) => {
  if (ctx) {
    const subdomain = ctx?.req?.headers?.host?.trim();
    return subdomain;
  }
  if (process.browser) {
    const subdomain = window?.location.host.trim();
    return subdomain;
  }
  return '';
};
