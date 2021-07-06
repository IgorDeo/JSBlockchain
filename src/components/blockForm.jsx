import React from "react"


const blockForm = () => {
    const [data, setData] = React.useState("");
    const [difficulty, setDifficulty] = React.useState(0);

    return (
    
            <div className="form-div">
                <form action="">
                    <label>Data:</label><br></br>
                    <input type="text" id="fdata" name="fdata" onChange ={(evt) => setData(evt.target.value)}></input>

                    <label>Difficulty:</label><br></br>
                    <input type="number" id="fdifficulty" min ="1" name="fdifficulty" onChange ={(evt) => setDifficulty(evt.target.value)}></input>
                    
                    <button type="button" id="new-block-button" onClick={() => {console.log("Clicado")}} >New Block</button>
                </form>
            </div> 
        
    )
}

export default blockForm