import React from "react"

import Block from "./block.jsx"

import { connect } from "react-redux"



const blockList = ({ blockchain }) => {
    return(
        <div id="blocks-div">
            {
                blockchain.map(block => {
                    console.log(`vou mostrar um bloco ${block.index}`);
                    return (
                        <Block block = {block} key={block.index}/>
                    )
                })
            }
        </div>
        )
}


const mapStateToProps = (store) => ({
    blockchain: store.blockchain.blockchain.chain
})

// Mapear Actions para o props
const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(blockList)