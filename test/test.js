// const expect = require('chai').expect;
const blockchain = require('../src/Blockchain.js').Blockchain;
const block = require('../src/Block.js').Block;

//

let blockchainTest = new blockchain();
let blockTest = new block({ amount: 100, receiver: "André", payer: "Igor" }, '08/06/2021', 3);


describe('Blockchain JS', () => {
    describe('when mining a block works', () => {
        it('the prefix of the hash must have the same amount of zeros as the difficulty', () => {

            blockchainTest.addBlock(blockTest);
            const block = blockchainTest.chain[1];
            const result = block.hash.substring(0, block.difficulty) == Array(block.difficulty + 1).join("0");
            expect(result).toBeTruthy()
        });
    });

    describe('when chain is valid', () => {
        it('should return true', () => {
            expect(blockchainTest.isChainValid()).toBeTruthy();
        })

        it('should return false', () => {
            blockchainTest.chain[1].data = 'data modification';
            expect(blockchainTest.isChainValid()).toBeFalsy();
        });
    });

    describe('getLatestBlock works', () => {
        it('should return the last block', () => {
            const lastBlockHash = blockchainTest.getLatestBlock().hash
            expect(blockTest.hash).toBe(lastBlockHash)
        });
    });
});