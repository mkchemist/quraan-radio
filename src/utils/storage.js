/**
 *
 * @param {string | undefined} key
 * @param {any} value
 */
export const storage = (key, value) => {
  if (!key) {
    return {
      get: (key) => localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, value),
    };
  }

  if (!value) {
    return localStorage.getItem(key);
  }

  localStorage.setItem(key, value);
};
