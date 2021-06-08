const blockchain = require('./Blockchain.js').Blockchain;
const block = require('./Blockchain.js').Block;
const express = require('express');
const app = express();
const port = 3000;

const newBlockchain = new blockchain();

app.get('/is_chain_valid', (req, res) => {
    res.send(newBlockchain.isChainValid());
});

//localhost:3000/mine_block?data=example&date=07/06/2021&difficulty=4
app.get('/mine_block', (req, res) => {
    let data = req.query.data;
    let date = req.query.date;
    let difficulty = req.query.difficulty;

    let dataFill = {
        value: data
    }
    let response = newBlockchain.addBlock(new block(dataFill, date, parseInt(difficulty)));
    res.send({ response });
});

app.get('/get_chain', (req, res) => {
    res.send({ newBlockchain });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});