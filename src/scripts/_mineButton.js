
const createMineButton = (block) => {
    return(
               `
               <div>
                   <button class="mine-block-button" id="mine-block-button-${block.index}">Mine Block</button>
                   
               </div>
               `
       );
   }
   
module.exports = createMineButton;