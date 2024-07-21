import { useState } from "react"



const ConditionalRender = ()=> {

    const [chave] = useState(true)

    return(

        <>
            <h2>Conditional Render</h2>

            {chave && <p>Isto é mostrado se o lavor de "chave" é true</p>}

        </>
    )
}

export default  ConditionalRender