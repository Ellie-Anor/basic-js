const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 0;
    for (const el of arr) {
      if (Array.isArray(el)) {
        max = Math.max(max, this.calculateDepth(el));
      }
    }
    return max + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
