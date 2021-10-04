import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if ((arguments.length !== 2) || (typeof(message) !== 'string') || (typeof(key) !== 'string')) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let result = [];
    let codeA = 'a'.charCodeAt(0);
    let count = 26;
    let kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf);
    let shift;
    let letterIdx;
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)) {
        shift = key.charCodeAt(j) - codeA;
        letterIdx = message.charCodeAt(i) - codeA;
        result.push(String.fromCharCode((letterIdx + shift) % count + codeA));
        j++;
      }
      else {
        result.push(message[i]);
      }
    
    }
    if (!this.direct) return  result.reverse().join('').toUpperCase();;
    return result.join('').toUpperCase();
  }

  decrypt(message, key) {
    if ((arguments.length !==2) || (typeof(message) !== 'string') || (typeof(key) !== 'string')) {
      throw new Error('Incorrect arguments!');
    }
    
    message = message.toLowerCase();
    key = key.toLowerCase();
    let result = [];
    let codeA = 'a'.charCodeAt(0);
    let count = 26;
    let kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf);
    let shift;
    let letterIdx;
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)) {
        shift = key.charCodeAt(j) - codeA;
        letterIdx = message.charCodeAt(i) - codeA;
        result.push(String.fromCharCode((letterIdx- shift + count) % count + codeA));
        j++;
      }
      else {
        result.push(message[i]);
      }
    
    }
    if  (!this.direct) result.reverse().join('').toUpperCase();
    return result.join('').toUpperCase();
  }
}
