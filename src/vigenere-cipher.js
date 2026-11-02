const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _process(text, key, decrypt) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const message = String(text).toUpperCase();
    const cleanKey = String(key).toUpperCase().replace(/[^A-Z]/g, '');

    // Если ключ пуст после очистки — нечего применять
    if (cleanKey.length === 0) {
      return this.direct ? message : message.split('').reverse().join('');
    }

    let result = '';
    let keyIndex = 0;

    for (const ch of message) {
      if (ch >= 'A' && ch <= 'Z') {
        const shift = cleanKey.charCodeAt(keyIndex % cleanKey.length) - 65;
        const base = ch.charCodeAt(0) - 65;
        const idx = decrypt ? (base - shift + 26) % 26 : (base + shift) % 26;
        result += String.fromCharCode(idx + 65);
        keyIndex++;
      } else {
        result += ch; // не-буквы остаются как есть и не сдвигают ключ
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, false);
  }

  decrypt(message, key) {
    return this._process(message, key, true);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
