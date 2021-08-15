/* eslint-disable no-magic-numbers */
export const isBoolean = (element) => 'boolean' === typeof element;
export const isFunction = (element) => 'function' === typeof element;

export const generateUUID = () =>
`${new Date().getTime()}_${([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )}`;

export const isEmpty = (element) => {
  if (!element) {
    return true;
  }

  if (Array.isArray(element)) {
    return !(element.length);
  }

  if ('object' === typeof element) {
    return !(Object.keys(element).length);
  }
  
  return !element;
};