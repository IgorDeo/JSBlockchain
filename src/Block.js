const SHA256 = require('crypto-js/sha256');

class Block {
    static index = 0;
    constructor(data, difficulty) {
        this.data = data;
        this.previousHash = '';
        this.timeStamp = '';
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
        this.timeStamp = Date.now();
        while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateBlockHash();
        }
    }
}

module.exports = { Block };