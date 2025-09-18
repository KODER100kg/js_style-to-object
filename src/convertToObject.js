'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const styles = {};

  sourceString
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s)
    .forEach((s) => {
      const parts = s.split(':').map((p) => p.trim());
      const key = parts[0];
      const value = parts[1];

      styles[key] = value;
    });

  return styles;
}
module.exports = convertToObject;
