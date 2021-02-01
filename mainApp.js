import { ENCRYPT, DECRYPT, encryptDecryptLetters } from './encryptDecrypt.js';

const caesarCipher = (str = '', shift = 0, action = ENCRYPT) => {
	let result = '';

	try
	{
		if (!str || str.length === 0 || shift <= 0) {
			result = str;
		}
		result = encryptDecryptLetters(str, shift, action);
	} catch (error) {
		console.error(error.message);
	}
	finally {
		return result;
	}
};

// test usages
let encrypted = caesarCipher("ahellOw121", 3, ENCRYPT);
console.log('Encrypted: ', encrypted);

encrypted = caesarCipher(undefined, 3, ENCRYPT);
console.log('Decrypted: ', encrypted);

encrypted = caesarCipher("ahellOw121", 0);
console.log('Encrypted: ', encrypted);

let decrypted = caesarCipher(2131, 3, DECRYPT);
console.log('Decrypted: ', decrypted);

decrypted = caesarCipher("dkhooRz121", 3, DECRYPT);
console.log('Decrypted: ', decrypted);

decrypted = caesarCipher("dkhooRz121");
console.log('Decrypted: ', decrypted);
