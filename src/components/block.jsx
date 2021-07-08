import React from "react"
import { connect } from "react-redux"

const Block = ({ block }) => {
    return (
        <div className="block" id={"block-" + block.index}>
            <div>
                <label>Index:</label>
                <input className="index-input-block" type="text" disabled defaultValue={block.index}></input>
            </div>

            <div>
                <label>Data: </label>
                <input className="data-input-block" type="text" defaultValue={block.data.value}></input>

            </div>

            <div>
                <label>Previous Hash: </label>
                <input className="phash-input-block" type="text" disabled defaultValue={block.previousHash}></input>
            </div>

            <div>
                <label>Hash: </label>
                <input className="hash-input-block-valid" type="text" disabled defaultValue={block.hash}></input>
            </div>

            <div>
                <label>Nonce:</label>
                <input className="nonce-input-block" type="text" disabled defaultValue={block.nonce}></input>
            </div>`

        </div>
    )

}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Block)