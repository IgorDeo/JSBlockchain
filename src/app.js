const blockchain = require('./Blockchain.js').Blockchain;
const block = require('./Block.js').Block;
const express = require('express');
const app = express();
const port = 3000;

const newBlockchain = new blockchain();

app.get('/is_chain_valid', (req, res) => {
    res.send(newBlockchain.isChainValid());
});

//localhost:3000/mine_block?data=example&difficulty=4
app.get('/mine_block', (req, res) => {
    let data = req.query.data;
    let difficulty = req.query.difficulty;

    let dataFill = {
        value: data
    }

    let response = newBlockchain.addBlock(new block(dataFill, parseInt(difficulty)));
    res.send({ response });
});

app.get('/get_chain', (req, res) => {
    res.send({ newBlockchain });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});