const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const count = {};
  for (const c of s1) count[c] = (count[c] || 0) +1;
  let result = 0;
  for (const c of s2) {
    if (count[c] > 0) {
      result++;
      count[c]--;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
