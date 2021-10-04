import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let j;
  let k = 0;
  let temp;
	for (let i = 0; i < arr.length - 1; i++) {
	  if (arr[i] !== -1) {
		j = i;
		k = 0; 
		while ((j < arr.length - 1) && (k < arr.length - 1)) {
			
		  if (arr[j+k+1] === -1) {
		  	k++;
		  }
		  else {
			if (arr[j] >= arr[j+k+1]) {
				temp = arr[j];
				arr[j] = arr[j+k+1];
				arr[j+k+1] = temp;
			}
			j = j+k+1;
			k = 0;
		  } 
		  
		}
	  }
	  
	}
	return arr;
}
