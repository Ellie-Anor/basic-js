const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    let count = 1;
    while (i + 1 < str.length && str[i + 1] === str[i]) {
      count++;
      i++;
    }
    result += (count > 1 ? count : '') + str[i];
    i++;
  }
  return result;
}

module.exports = {
  encodeLine
};
