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
    .map((styleString) => styleString.trim())
    .filter((styleString) => styleString)
    .forEach((styleString) => {
      const parts = styleString.split(':').map((part) => part.trim());
      const key = parts[0];
      const value = parts[1];

      styles[key] = value;
    });

  return styles;
}
module.exports = convertToObject;
