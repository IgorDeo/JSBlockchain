const blockchain = require('../src/Blockchain.js').Blockchain;
const block = require('../src/Block.js').Block;

// Inserir um before com callback para declarar os blocos
// Ficar atento as dependências se estão no ambiente certo
// Sempre especificar nos testes oq quero rodar (jest .test/**/**_test.js)
// Nao colocar output nos testes
// Nome dos arquivos de classe todos minúsculos

describe('Blockchain JS', () => {
    let blockchainTest;
    let blockTest;

    beforeAll(() => {
        blockchainTest = new blockchain();
        blockTest = new block({ amount: 100, receiver: "André", payer: "Igor" }, 3);
    });

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