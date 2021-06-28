const createMineButton = (block) => {
    return (
        `
            <button class="mine-block-button" id="mine-block-button-${block.index}">Mine Block</button>
        `
    );
}

module.exports = createMineButton;