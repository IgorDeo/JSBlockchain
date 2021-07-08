const SHA256 = require('crypto-js/sha256');

class Block {
    static index = 0;
    constructor(data, difficulty, index) {
        this.data = data;
        this.previousHash = '';
        this.timeStamp = '';
        this.index = index;
        this.hash = this.calculateBlockHash();
        this.nonce = 0;
        this.difficulty = parseInt(difficulty);
    }

    calculateBlockHash() {
        let dataToHash = this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce;
        return SHA256(dataToHash).toString();
    }

    mineBlock() {
        this.timeStamp = Date.now();
        let substring =  this.hash.substring(0, this.difficulty);
        while ((substring !== Array(this.difficulty + 1).join("0")) && (substring[substring.len - 1] !== 0)) {
            this.nonce++; 
            this.hash = this.calculateBlockHash();
            substring =  this.hash.substring(0, this.difficulty);
        }
    }
}

export default Block