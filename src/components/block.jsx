import React from "react"


const block = ({ block }) => {
    return (
        <div className="block" id={"block-" + block.index}>
            <div>
                <label>Index:</label>
                <input className="index-input-block" type="text" disabled value={block.index}></input>
            </div>

            <div>
                <label>Data: </label>
                <input className="data-input-block" type="text" value={block.data.value}></input>

            </div>

            <div>
                <label>Previous Hash: </label>
                <input className="phash-input-block" type="text" disabled value={block.previousHash}></input>
            </div>

            <div>
                <label>Hash: </label>
                <input className="hash-input-block-valid" type="text" disabled value={block.hash}></input>
            </div>

            <div>
                <label>Nonce:</label>
                <input className="nonce-input-block" type="text" disabled value={block.nonce}></input>
            </div>`

        </div>
    )

}

export default block