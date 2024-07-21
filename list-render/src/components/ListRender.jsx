import { useState } from "react"


const ListRender = ()=> {

    const [clientes, setClientes ] = useState(["Maria", "José", "Antônio","Beatriz", "Ana"])

    return(
        <>
            <h2>List Render</h2>

            <ol>
                {clientes.map((c, index)=> (
                    <li key={index}>{c}</li>
                ))}
            </ol>

        </>
    )
}

export default ListRender