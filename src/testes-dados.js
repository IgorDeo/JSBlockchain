const block = require('./Block').Block;
const blockchain = require('./Blockchain.js').Blockchain;

const newBlockchain = new blockchain();
let data = {
    value: 'Hello World!'
};
let data2 = {
    value: 'Hello!'
};
let data3 = {
    value: 'Hi'
}
let test = []
test.push(newBlockchain.addBlock(
    new block(data, '06/05/2021', 3)));
test.push(newBlockchain.addBlock(
    new block(data2, '07/05/2021', 2)));
test.push(newBlockchain.addBlock(
    new block(data3, '08/05/2021', 4)));


console.log(JSON.stringify(test, null, 4));

let teste = {
    value: 'oi',
    key: 10
}