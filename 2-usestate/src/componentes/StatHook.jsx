
import { useState } from "react"

const StateHook = () => {

    let valueVar = 0
    
    const altVariable = ()=> {
        valueVar++
        console.log(valueVar)
    }

    const altState = ()=> {
        setValueState(old=> old + 1)
        console.log(valueState)
    }

    const [valueState, setValueState] = useState(0)

    return(
        <>
            <h2>Variables x useState</h2> <br />

            <p>Variável: <strong>{valueVar}</strong></p>
            <button onClick={altVariable}>Alterar Variável</button>
            <hr />

            <p>State: {valueState}</p>
            <button onClick={altState}>Alterar State</button>

            
        </>
    )
}

export default StateHook
