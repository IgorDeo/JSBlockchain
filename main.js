const  SHA256 = require('crypto-js/sha256');

class Block{
    
    constructor(index, data, previousHash = "", timeStamp){
        this.data = data;
        this.previousHash = previousHash;
        this.timeStamp = timeStamp;
        this.index = index;
        this.hash = "";
        this.nonce = 0;
    }

    calculateBlockHash(){
        let dataToHash = this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data) + this.nonce.toString();
        return SHA256(dataToHash).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateBlockHash();
        }
    }

}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 7;
    }

    createGenesisBlock(){
        return new Block(0, "25/05/2021", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock)
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateBlockHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

let igorCoin = new Blockchain();

console.log("Quantidade de zeros: "+igorCoin.difficulty);

let mine1 = Date.now();

igorCoin.addBlock(new Block(1, "21/05/2021", {amount: 50}))

let finish1 = Date.now();

let elepsedTime = ((finish1 - mine1)/60000);
console.log("Tempo decorrido para mineração do bloco 1: " + elepsedTime + " minutos");

let mine2 = Date.now();

igorCoin.addBlock(new Block(2, "21/05/2021", {amount: 500}))

let finish2 = Date.now();

let elepsedTime2 = ((finish2 - mine2)/60000);
console.log("Tempo decorrido para mineração do bloco 2: " + elepsedTime2 + " minutos");

// console.log(JSON.stringify(igorCoin, null, 4))

