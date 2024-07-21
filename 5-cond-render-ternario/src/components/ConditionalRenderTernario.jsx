import { useState } from "react"


const ConditionalRenderTernario = ()=> {

    const [name, setName] = useState("Maria")

    return(
        <>
            <h2>Conditional Render Ternário</h2>

            {name === "João" ? (
                <div><p>O nome é João</p></div>
            ) : (
                <div><p>O nome não é João</p></div>
            )}

            <hr />

            <button onClick={()=> setName("João")}>Alterar o nome para João</button>


        </>
    )
}

export default ConditionalRenderTernario