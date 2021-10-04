/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from 'react';

import { isEmpty } from '../utils/functions';

const useStorage = (key, defaultValue, storage) => {
  const [ value, setValue ] = useState(() => {
    const valueAsString = storage.getItem(key);

    if (!isEmpty(valueAsString)) {
      return JSON.parse(valueAsString);
    }

    return 'function' === typeof defaultValue ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    if (!value) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, JSON.stringify(value));
    }
  }, [ key, value, storage ]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [ value, setValue, remove ];
};

export const useLocalStorage = (key, defaultValue) => useStorage(key, defaultValue, window.localStorage);

export const useSessionStorage = (key, defaultValue) => useStorage(key, defaultValue, window.sessionStorage);
