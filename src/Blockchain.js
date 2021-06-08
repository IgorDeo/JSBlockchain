const SHA256 = require('crypto-js/sha256');

class Block {
    static index = 0;
    constructor(data, timeStamp, difficulty) {
        this.data = data;
        this.previousHash = '';
        this.timeStamp = timeStamp;
        this.index = Block.index++;
        this.hash = this.calculateBlockHash();
        this.nonce = 0;
        this.difficulty = difficulty;
    }

    calculateBlockHash() {
        let dataToHash = this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce;
        return SHA256(dataToHash).toString();
    }

    mineBlock() {
        while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateBlockHash();
        }
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block({
            value: 'Genesis block'
        }, "25/05/2021", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock();
        this.chain.push(newBlock);
        return newBlock;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateBlockHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = { Blockchain, Block };