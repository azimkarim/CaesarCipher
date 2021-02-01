export const ENCRYPT = 0;
export const DECRYPT = 1;

const encrypt = (str, shift) => {
    let encrypted = "";

    [...str].map(c => {
        if (c.match(/[a-z]/i)) {
            const code = c.charCodeAt(0);
            if (code >= 65 && code <= 90) { // if uppercase
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // lowercase
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encrypted += c;
    });

    return encrypted;
}

const decrypt = (str, shift) => {
    let decrypted = "";

    [...str].map(c => {
        if (c.match(/[a-z]/i)) {
            const code = c.charCodeAt(0);
            if (code >= 65 && code <= 90) { // if uppercase
                c = String.fromCharCode(((code - 65 - shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // lowercase
                c = String.fromCharCode(((code - 97 - shift) % 26) + 97);
            }
        }
        decrypted += c;
    });

    return decrypted;
}

export const encryptDecryptLetters = (str, shift, action) => {
    if (action === ENCRYPT) return encrypt(str, shift);
    else return decrypt(str, shift);
};
