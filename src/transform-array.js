/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next doubles the next element of the array in the transformed array.
  // --double-prev doubles the previous element of the array in the transformed array.
  //
  //

  const res = [];

  for(let i = 0 ; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if(arr[i+1]) {
          i++;
        }
        break;
      case '--discard-prev':
        if(res.length && arr[i - 1] === res[i-1]) {
          res.pop();
        }
        break;
      case '--double-next':
        if(arr[i+1]) {
          res.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if(i && arr[i - 1] === res[i-1]) {
          res.push(arr[i - 1]);
        }
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res;

}
