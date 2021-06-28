import { Block } from "../Block.js";
import { Blockchain } from "../Blockchain.js";
import blockDiv from "./_blockDiv";
import createMineButton from "./_mineButton.js";

const blockchain = new Blockchain();

const newBlockButton = document.getElementById("new-block-button");
const inputData = document.getElementById("fdata");
const inputDifficulty = document.getElementById("fdifficulty");
const divBlocks = document.getElementById('blocks-div');

const genesisBlock = blockchain.chain[0];
// console.log(JSON.stringify(genesisBlock, null, 0));

newBlockButton.onclick = (event) => {
    event.preventDefault(); //Evita o reload da pagina
    if (inputData.value && inputDifficulty.value) {
        // console.log(`Criando novo bloco, Dados: ${inputData.value}, Dificuldade: ${inputDifficulty.value}`);
        let obj = {
            value: inputData.value
        }
        let newBlock = blockchain.addBlock(new Block(obj, parseInt(inputDifficulty.value)));
        console.log(newBlock);
        createBlockDiv(newBlock);
        inputData.value = '';
        inputDifficulty.value = '';
    }
};

const createBlockDiv = (block) => {
    let wrapperDiv = document.createElement("div");
    wrapperDiv.className = "block";
    wrapperDiv.id = `block-${block.index}`;
    wrapperDiv.innerHTML += blockDiv(block);

    divBlocks.appendChild(wrapperDiv);
    createEventListener();
}

const createEventListener = () => {
    const elements = document.querySelectorAll('.block');
    // adding the event listener by looping
    elements.forEach(element => {
        const blockId = element.id;
        const blockInfo = blockId.split("-");
        const blockIndex = blockInfo[1]
        const inputDataBlock = element.getElementsByClassName('data-input-block')[0];
        const mineButton = element.getElementsByClassName('mine-block-button')[0];

        inputDataBlock.addEventListener('change', (e) => {
            blockchain.chain[blockIndex].data.value = e.target.value;
            // let newHash = blockchain.chain[blockIndex].calculateBlockHash();
            // blockchain.chain[blockIndex].hash = newHash;

            invalidateChain(blockIndex);
        });

        if (mineButton !== undefined) {
            mineButton.onclick = (event) => {
                event.preventDefault();
                validadeBlock(blockIndex);
            }
        }
    });
}

function invalidateBlock(blockIndexStr) {
    const blockIndex = parseInt(blockIndexStr);
    const block = blockchain.chain[blockIndex];
    const invalidateBlockDiv = document.getElementById(`block-${blockIndex}`);
    let previousHash = document.getElementById(`block-${blockIndex}`).getElementsByClassName("phash-input-block")[0];

    let hashInput = document.getElementById(`block-${blockIndex}`).getElementsByClassName("hash-input-block-valid")[0];
    if (hashInput === undefined) {
        hashInput = document.getElementById(`block-${blockIndex}`).getElementsByClassName("hash-input-block-invalid")[0];
    }
    hashInput.className = "hash-input-block-invalid";
    previousHash.value = block.previousHash;
    hashInput.value = block.hash;

    let invalidButton = document.getElementById(`block-${blockIndex}`).getElementsByClassName("mine-block-button")[0];
    if (invalidButton === undefined) {
        // invalidateBlockDiv.innerHTML += createMineButton(block);
        const divButton = document.createElement("div");
        divButton.className = "wrapper-mine-button";
        divButton.innerHTML += createMineButton(block);
        invalidateBlockDiv.appendChild(divButton);
    }

    createEventListener();
}

function validadeBlock(blockIndexStr) {
    const blockIndex = parseInt(blockIndexStr);
    const block = blockchain.chain[blockIndex];

    let hashInput = document.getElementById(`block-${blockIndex}`).getElementsByClassName("hash-input-block-invalid")[0];
    hashInput.className = "hash-input-block-valid";

    let nonceInput = document.getElementById(`block-${blockIndex}`).getElementsByClassName("nonce-input-block")[0];
    if (blockIndex == 0) {
        block.hash = block.calculateBlockHash();
    } else {
        block.mineBlock();
    }

    hashInput.value = block.hash;
    nonceInput.value = block.nonce;

    if (blockIndex != blockchain.chain.length - 1) {
        invalidateChain(blockIndex + 1);
    }

    let invalidButtonWrapper = document.getElementById(`block-${blockIndex}`).getElementsByClassName("wrapper-mine-button")[0];
    document.getElementById(`block-${blockIndex}`).removeChild(invalidButtonWrapper);
    createEventListener();
}

function invalidateChain(blockIndex) {
    for (let index = blockIndex; index <= blockchain.chain.length - 1; index++) {
        if (index == 0) {
            blockchain.chain[index].previousHash = "";
        } else {
            blockchain.chain[index].previousHash = blockchain.chain[index - 1].hash;
        }

        let newHash = blockchain.chain[index].calculateBlockHash();
        blockchain.chain[index].hash = newHash;
        invalidateBlock(index);
    }
}

createBlockDiv(genesisBlock);