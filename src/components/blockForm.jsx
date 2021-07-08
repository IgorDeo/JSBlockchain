import React from "react"
import { connect } from "react-redux"

import BlockchainDuck from "../ducks/blockchainDuck"

const blockForm = ({addNewBlock}) => {
    const [data, setData] = React.useState("");
    const [difficulty, setDifficulty] = React.useState(0);
    
    return (
        <div className="form-div">
            <form action="">
                <label>Data:</label><br></br>
                <input type="text"
                    id="fdata"
                    name="fdata"
                    onChange ={(evt) => setData(evt.target.value)}
                ></input>

                <label>Difficulty:</label><br></br>
                <input type="number" id="fdifficulty" min ="1" name="fdifficulty" onChange ={(evt) => setDifficulty(evt.target.value)}></input>
                
                <button type="button" id="new-block-button" onClick={() => {console.log('add novo bloco: ',{data, difficulty}); addNewBlock({data, difficulty})}} >New Block</button>
            </form>
        </div> 
        
    )
}

// Camada de integração do componente com o redux
// Mapear Dados para o props
const mapStateToProps = () => ({})

// Mapear Actions para o props
const mapDispatchToProps = (dispatch) => ({
  addNewBlock: ({ data, difficulty }) => dispatch(
    BlockchainDuck.creators.addBlock(data, difficulty)
    // ({ type: ...., name, age })
  ) 
})

export default connect(mapStateToProps, mapDispatchToProps)(blockForm)