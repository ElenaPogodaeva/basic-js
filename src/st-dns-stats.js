import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {};
  
  for (let i = 0; i < domains.length; i++) {
    
    let subStr = '';
    let newStr = '';
    while (domains[i].length !== 0) {

      let foundPos = domains[i].lastIndexOf('.');
      if (foundPos == -1) {
        subStr = domains[i];
        newStr += '.';
      }
      else {
        subStr = domains[i].slice(foundPos);
      }
      newStr += subStr;
      domains[i] =  domains[i].replace(subStr, '');  
      if (result[newStr]) {
        result[newStr]++;
      }
      else {
        result[newStr] = 1;
      }
      
    }
  }
  return result;
}
