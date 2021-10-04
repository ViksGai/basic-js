import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(digits) {
  if(digits.toString().length === 1 || digits === 0) {
    return 0;
  }

  const str = digits.toString();
  if(Number(str[0]) > Number(str[1])) {
    return Number(str[0] + str.slice(2));
  }

  if(Number(str[0]) < Number(str[1])){
    return Number(str.slice(1));
  }

  for(let i = 2; i< str.length; i++) {
    if(Number(str[0]) === Number(str[i])) {
      continue;
    }

    if(Number(str[0]) > Number(str[i])) {
      return Number(str.slice(0, i) + str.slice(i+1));
    }

    if(Number(str[0]) < Number(str[i])) {
      return Number(  str.slice(1));
    }
  }
}
