import React from 'react'

const UserDetails = ({name, age, occupation}) => {

    return (
        <>
        <hr />
            <h3>Usuário: {name}</h3>
            
            <li>Idade: {age} anos.</li>
            <li>Profissão: {occupation}</li>

            {age >= 18 && <p>Apto para tirar a carteira de habilitação.</p> }
        </>
    )
}

export default UserDetails