const EC = require('elliptic').ec
const ec = new EC('secp256k1');

const key = ec.genKeyPair()
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log();
console.log('Private key: ', privateKey);

console.log();
console.log('Public key: ', publicKey);

// ccd27a17944d2ef18dfe4e4a270493b6fb161ee9e43f90a9cb2e40c2e1612919
// 04674fcb2d83f8d73ee89ae15c72e6c79244522f1ac47b43946828fe4ddd94f5e64554a13eac996c2eed3f851d6a54370db3ce990a148c076ef2f3958644b5afbc