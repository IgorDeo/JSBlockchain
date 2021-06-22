import {Block} from "../Block.js"
import {Blockchain} from "../Blockchain.js"
import blockDiv from "./_blockDiv"

const blockchain = new Blockchain();


const buttonElement = document.getElementById("new-block-button");
const inputData = document.getElementById("fdata");
const inputDifficulty = document.getElementById("fdifficulty");
const divBlocks = document.getElementById('blocks-div');

const genesisBlock = blockchain.chain[0]
console.log(JSON.stringify(genesisBlock, null, 0));


buttonElement.onclick = (event) => {
    event.preventDefault(); //Evita o reload da pagina
    if(inputData.value && inputDifficulty.value){
        console.log(`Dados: ${inputData.value} Dificuldade: ${inputDifficulty.value}`);
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

const createBlockDiv = (block) =>{
    let wrapperDiv = document.createElement("div");
    wrapperDiv.className = "block";
    wrapperDiv.innerHTML += blockDiv(block)
    

    divBlocks.appendChild(wrapperDiv);
}

createBlockDiv(genesisBlock)