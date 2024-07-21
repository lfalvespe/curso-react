import { useState } from "react"


const KeyProp= ()=> {

    const [users] = useState([
        {id: 0, name: "Maria", age:19},
        {id: 1, name:"Pedro", age:22},
        {id: 2, name: "Ana", age:41},
        {id: 3, name: "Beatriz", age:35}
    ])

    return(
        <>
            <h2>Key Prop</h2>

            <ol>
                {users.map((u)=> (
                    <li key={u.id}>{u.name} - {u.age}</li>
                ))}
            </ol>


        </>
    )
}

export default  KeyProp