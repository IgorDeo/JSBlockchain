import React from "react"

import Block from "./block.jsx"

import { connect } from "react-redux"
import PropTypes from "prop-types"


const BlockList = ({ blockchain }) => {
    return (
        <div id="blocks-div">
            {
                blockchain.map(block => {
                    console.log(`vou mostrar um bloco ${block.index}`);
                    return (
                        <Block block={block} key={block.index} />
                    )
                })
            }
        </div>
    )
}

BlockList.prototype = {
    blockchain: PropTypes.array
}

BlockList.defaultProps = {
    blockchain: []
}

const mapStateToProps = (store) => ({
    blockchain: store.blockchain.blockchain.chain
})

// Mapear Actions para o props
const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(BlockList)