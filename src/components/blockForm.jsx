import React from "react"


const blockForm = () => {
    const [data, setData] = React.useState("");
    const [difficulty, setDifficulty] = React.useState(0);

    return (
        <>
            <div class="form-div">
                <form action="">
                    <label for="fdata">Data:</label><br></br>
                    <input type="text" id="fdata" name="fdata" onChange ={(evt) => setData(evt.target.value)}><br></br></input>

                    <label for="fdifficulty">Difficulty:</label><br></br>
                    <input type="number" id="fdifficulty" min ="1" name="fdifficulty" onChange ={(evt) => setDifficulty(evt.target.value)}><br></br></input>
                    
                    <button type="button" id="new-block-button" onClick={console.log("Clicado")}>New Block</button>
                </form>
            </div> 
        </>
    )
}

export default blockForm