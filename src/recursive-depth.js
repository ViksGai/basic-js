/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let arrDepth = 0;
    for (const item of arr) {
      arrDepth = Math.max(this.calculateDepth(item), arrDepth);
    }
    arrDepth++;

    return arrDepth;
  }
}
