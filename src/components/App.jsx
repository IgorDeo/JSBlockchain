import React from "react"

import BlockForm from "./blockForm"
import BlockList from "./blockList.jsx"


import Block from "../Block.js"
import Blockchain from "../Blockchain.js"


const App = () => {
    let [blockchainObj, setBlockchainObj] = React.useState(new Blockchain())
    const [blockchainPri, setBlock] = React.useState(blockchainObj.chain)
    return (
        <React.Fragment>
            <BlockForm addNewBlock={(block) => (setBlock([... blockchainPri, blockchainObj.addBlock(new Block({value: block.data}, block.difficulty, blockchainObj.getLatestBlockIndex() + 1))]))}/>
            <BlockList blockchain={blockchainPri}/>
        </React.Fragment>
    )
}

export default App