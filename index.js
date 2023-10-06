const { BlockChain, Transaction } = require('./src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(
  'ccd27a17944d2ef18dfe4e4a270493b6fb161ee9e43f90a9cb2e40c2e1612919'
);
const myWalletAddress = myKey.getPublic('hex');

let myBlockChain = new BlockChain();

const tx1 = new Transaction(
  myWalletAddress,
  'public key goes here',
  10
);
tx1.signTransaction(myKey);

myBlockChain.addTransaction(tx1);

console.log('\nStarting the miner');

myBlockChain.minePendingTransactions(myWalletAddress);

console.log(
  '\n Balance of xavier is',
  myBlockChain.getBalanceOfAddress(myWalletAddress)
);

console.log('Is chain valid?', myBlockChain.isChainValid());
// myBlockChain.chain[1].transactions[0].amount = 1
// console.log('Is chain valid?', myBlockChain.isChainValid());

// console.log('block1');
// myBlockChain.addBlock(
//   new Block(1, {
//     name: 'John',
//     address: '00800c31b8ccb25b36cf948eb031555f2cf31986b7c430286a0f88ace7cb8cd2',
//     amount: 400,
//   })
// );
// console.log('block2');
// myBlockChain.addBlock(
//   new Block(2, {
//     name: 'Mary',
//     address:
//       '7e9c47c9b174d168318d799957ac6b1cade759e0850957e967abc691fe9704f4 ',
//     amount: 100,
//   })
// );

// console.log('is valid ' + myBlockChain.isChainValid());

// myBlockChain.chain[1].transactions = { amount: 100 };
// myBlockChain.chain[1].hash = myBlockChain.chain[1].calculateHash();
// console.log('is valid ' + myBlockChain.isChainValid());
// console.log(JSON.stringify(myBlockChain, null, 4));
