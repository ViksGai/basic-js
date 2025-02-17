/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  const res =  matrix.map(arr => arr.map(() => 0));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col]) {
        increaseValue(res, row-1, col-1);
        increaseValue(res, row-1, col);
        increaseValue(res, row-1, col+1);
        increaseValue(res, row, col-1);
        increaseValue(res, row, col+1);
        increaseValue(res, row+1, col);
        increaseValue(res, row+1, col-1);
        increaseValue(res, row+1, col+1);
      }
    }
  }

  return res;

}

const increaseValue = (res, row, col) => {
  if(res[row] && (res[row][col] !== undefined)) {
    res[row][col]++;
  }
}
