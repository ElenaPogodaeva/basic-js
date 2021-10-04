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
export default function deleteDigit(n) {
  let digits = [];
  while (n !== 0) {
     let digit = n % 10;
     digits.push(digit);
     n = Math.floor(n / 10);
  }
  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    let n = 0;
    for (let j =digits.length - 1; j>=0; j-- ) {
      if (i !== j) {
        n = n*10 + digits[j];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}
