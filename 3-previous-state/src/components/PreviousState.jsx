import { useState } from "react"


const PreviousState = ()=> {

    const [clientes, setClients] = useState([
        {id: 1, name: "Maria", age: 31},
        {id: 2, name: "José", age: 22},
        {id: 3, name: "Ana", age: 38},
        {id: 4, name: "Beatriz", age: 19},
        {id: 5, name: "Pedro", age: 22},
        {id: 6, name: "Julia", age: 43},
        {id: 7, name: "Sonia", age: 21}
    ])


    const deleteRandom = ()=> {
        const randomId = Math.floor(Math.random() * 7 + 1)
        
        setClients((prevClientes)=> {
            return prevClientes.filter(c=> c.id !==randomId  )
        })

    }

    return(
        <>
            <h2>Pevious State</h2>

            <ol>
                {clientes.map((c)=> (
                    <li key={c.id}>{c.name} - {c.age}</li>
                ))}
            </ol>

            <hr />

            <button onClick={deleteRandom}>Delete Random</button>




        </>
    )
}
export default PreviousState