import {Block} from "../Block.js"
import {Blockchain} from "../Blockchain.js"
import blockDiv from "./_blockDiv"
import createMineButton from "./_mineButton.js";

const blockchain = new Blockchain();


const newBlockButton = document.getElementById("new-block-button");
const inputData = document.getElementById("fdata");
const inputDifficulty = document.getElementById("fdifficulty");
const divBlocks = document.getElementById('blocks-div');
const mineBlockButton = document.getElementsByClassName("mine-block-button")

const genesisBlock = blockchain.chain[0]
console.log(JSON.stringify(genesisBlock, null, 0));


newBlockButton.onclick = (event) => {
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

function invalidateBlock(blockIndexStr) {
    const blockIndex = parseInt(blockIndexStr)

    const block = blockchain.chain[blockIndex];

    const invalidateBlockDiv = document.getElementById(`block-${blockIndex}`)
    const hashInput = document.getElementById(`block-${blockIndex}`).getElementsByClassName("hash-input-block-valid")[0]

    hashInput.className = "hash-input-block-invalid"

    invalidateBlockDiv.innerHTML += createMineButton(block)
}



const createBlockDiv = (block) =>{
    let wrapperDiv = document.createElement("div");
    wrapperDiv.className = "block";
    wrapperDiv.id = `block-${block.index}`
    wrapperDiv.innerHTML += blockDiv(block)

    divBlocks.appendChild(wrapperDiv);
    createEventListener();
}


const createEventListener = () =>{
    const elements = document.querySelectorAll('.block');
    // adding the event listener by looping
    elements.forEach(element => {
        const blockId = element.id
        const blockIndex = parseInt(blockId[blockId.length-1])
        const inputDataBlock = element.getElementsByClassName('data-input-block')[0];
        console.log('andre');

        inputDataBlock.addEventListener('change', (e)=>{   
            invalidateBlock(blockIndex);
            const newData = e.currentTarget.value
            e.target.value = newData;
        })

        console.log('1')
    });
}


createBlockDiv(genesisBlock)






function updateState(block, chain) {
    // set the well background red or green for this block
    if (block.hash.substring(0, this.difficulty) === Array(this.difficulty + 1).join("0")){
        // set the hash input, inside the block div id, class to hash-input-block-valid 
    } 
      
    else {
      // set the hash input, inside the block div id, class to hash-input-block-invalid 
    }
}
  
  
  function updateHash(block, chain) {
    // update the SHA256 hash value for this block
    $('#block'+block+'chain'+chain+'hash').val(sha256(block, chain));
    block.calculateBlockHash()
    updateState(block, chain);
  }
  
  function updateChain(block, chain) {
    // update all blocks walking the chain from this block to the end
    for (var x = block; x <= 5; x++) {
      if (x > 1) {
        $('#block'+x+'chain'+chain+'previous').val($('#block'+(x-1).toString()+'chain'+chain+'hash').val());
      }
      updateHash(x, chain);
    }
  }
  