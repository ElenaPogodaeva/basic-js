import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++ ) {
    if (str[i] === str[i+1]) {
      count++;
    }
    else {
      result += count + str[i];
      count = 1;
    }
  }
  for (let char of result) {
    if (char === '1') {
      result = result.replace(char, '');
    }
  }
  return result;
}
