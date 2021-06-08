const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(index, data, timeStamp) {
        this.data = data;
        this.timeStamp = timeStamp;
        this.index = index;
        this.hash = "";
        this.nonce = 0;
    }

    calculateBlockHash() {
        let dataToHash = this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce.toString();
        return SHA256(dataToHash).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateBlockHash();
        }
    }

}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block(0, "25/05/2021", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock)
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

let igorCoin = new Blockchain();

console.log("Quantidade de zeros: " + igorCoin.difficulty);


// console.log("ANTES DE MINERAR O PRIMEIRO BLOCO\n", JSON.stringify(igorCoin, null, 4));
igorCoin.addBlock(new Block(1, "21/05/2021", { amount: 50 }))
    // console.log(igorCoin.getLatestBlock().nonce)
    // console.log("APOS MINERAR O PRIMEIRO BLOCO\n", JSON.stringify(igorCoin, null, 4));

// igorCoin.chain.pop();

// console.log('APOS APAGAR O BLOCO MINERADO\n', JSON.stringify(igorCoin, null, 4));

// igorCoin.addBlock(new Block(1, "21/05/2021", { amount: 50 }))
// console.log(igorCoin.getLatestBlock().nonce)

// console.log('APOS MINERAR O MESMO BLOCO\n', JSON.stringify(igorCoin, null, 4));

// console.log(JSON.stringify(igorCoin, null, 4))
igorCoin.addBlock(new Block(2, "21/05/2021", { amount: 50 }))

console.log(igorCoin.isChainValid());
igorCoin.chain[1].data = "aaaaaa";
console.log(igorCoin.isChainValid());