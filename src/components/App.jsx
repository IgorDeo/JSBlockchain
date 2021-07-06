import React from "react"

import BlockForm from "./blockForm"
import BlockList from "./blockList.jsx"
import GapDiv from "./gapDiv.jsx"

import Blockchain from "../Blockchain.js"

const blockchain = new Blockchain();

console.log(blockchain.chain)

const App = () => {
    // const [blockchain, setBlock] = React.useState([])
    return (
        <React.Fragment>
            <BlockForm/>
            <GapDiv/>
            {/* <BlockList/> */}
        </React.Fragment>
    )
}

export default App