import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length === 0) {
    return ('Unable to determine the time of year!');
  } 
  
  if (date instanceof Date) {
    if (isNaN(Date.parse(date))) 
    {
      throw new Error('Invalid date!');
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('Invalid date!');
    }
  /* if (isNaN(date.getTime())) {
    throw new Error('Invalid date!');
   }*/
  let month = date.getMonth();
  let season;
  switch (month) {
    case 0: 
      season = 'winter';
      break;
    case 1: 
      season = 'winter';
      break;
    case 2: 
      season = 'spring';
      break;
    case 3: 
      season = 'spring';
      break;
    case 4: 
      season = 'spring';
      break;
    case 5: 
      season = 'summer';
      break;
    case 6: 
      season = 'summer';
      break;
    case 7: 
      season = 'summer';
      break;
    case 8: 
      season = 'autumn';
      break;
    case 9: 
      season = 'autumn';
      break;
    case 10: 
      season = 'autumn';
      break;
    case 11: 
      season = 'winter';
      break;
  }
  return season;
 }
 else throw new Error('Invalid date!');
}
