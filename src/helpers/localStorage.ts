/* eslint-disable no-console */
const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  if (!isBrowser) return;
  try {
    const serialized = JSON.stringify(value);
    window.localStorage.setItem(key, serialized);
  } catch (err) {
    console.error(`localStorage setItem error for key "${key}"`, err);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  if (!isBrowser) return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return null;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.error(`localStorage getItem error for key "${key}"`, err);
    return null;
  }
};

export const removeLocalStorageItem = (key: string): void => {
  if (!isBrowser) return;
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error(`localStorage removeItem error for key "${key}"`, err);
  }
};

export const clearLocalStorage = (): void => {
  if (!isBrowser) return;
  try {
    window.localStorage.clear();
  } catch (err) {
    console.error('localStorage clear error', err);
  }
};
