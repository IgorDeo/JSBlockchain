const blockDiv = (block) => {
    return (
        `<div>
            <label>Index:</label>
            <input class="index-input-block"type="text" disabled value="${block.index}">
        </div>

        <div>
            <label>Data: </label>
            <input class="data-input-block" type="text"  value="${block.data.value}">
            
        </div>

        <div>
            <label>Previous Hash: </label>
            <input class="phash-input-block" type="text" disabled value="${block.previousHash}">
        </div>

        <div>
            <label>Hash: </label>
            <input class="hash-input-block-valid" type="text" disabled value="${block.hash}">
        </div>

        <div>
            <label>Nonce:</label>
            <input class="nonce-input-block" type="text" disabled value="${block.nonce}">
        </div>`
    );
}

export default blockDiv