import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let digits = [];
  while (n !== 0) {
     let digit = n % 10;
     digits.push(digit);
     n = Math.floor(n / 10);
  }
  let sum = digits.reduce((current, result) => current + result, 0);
  if (sum < 10) {
    return sum;
  }
  else return getSumOfDigits(sum);
}
