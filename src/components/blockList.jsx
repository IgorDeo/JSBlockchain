import React from "react"
import Block from "./block.jsx"

// import blockDiv from "..scripts/_blockDiv.js"
//implementar a lista de blocos, lembrando que antes tinhamos uma wrapper div


const blockList = ({blockchain}) => {
    return(
        <div id="blocks-div">
            {
                blockchain.map(block => {
                    return (
                        <Block block = {block} key={block.index}/>
                    )
                })
            }
        </div>
        )

}


export default blockList