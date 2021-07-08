import Duck from "extensible-duck"

import Block from '../Block'
import Blockchain from '../Blockchain'

export default new Duck({

    namespace: 'blockchain',
    store: 'blockchain',
    types: ['ADD_BLOCK'],
    initialState: { blockchain: new Blockchain() },
    reducer: (state, action, duck) => {
        if (action.type === duck.types.ADD_BLOCK) {
            let data = {
                value: action.data,
            }
            let newBlock = new Block(data, action.difficulty, state.blockchain.getLatestBlockIndex() + 1);
            state.blockchain.addBlock(newBlock);
            console.log(state.blockchain.chain)
            let newBlockchain = new Blockchain();
            newBlockchain.chain.pop();
            state.blockchain.chain.forEach((block) => newBlockchain.chain.push(block))
            return { blockchain: newBlockchain };
        } else {
            return state;
        }
    },
    creators: (duck) => ({
        addBlock: (data, difficulty) => ({
            type: duck.types.ADD_BLOCK,
            data,
            difficulty
        })
    })
})