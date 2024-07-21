import {useState} from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

const handleSubmit = (e)=> {
    e.preventDefault()
    console.log("Enviando formulário")
    console.log(name, email, bio, role)
    setName('')
    setEmail('')
}

    return (

        <>
            <h2>Formulários</h2> <br />

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder='Digite seu nome' value={name} onChange={(e)=> setName(e.target.value)}/>

                {/*Label envolvendo o input: Não é necessário utiliazr o htmlFor*/}

                <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder='Informe seu email'value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Bio</span>

                    <textarea name="" id="" cols="30" rows="10" placeholder='Descição do usuário' value={bio} onChange={(e)=> setBio(e.target.value)}></textarea>
                </label>


                <label>
                    <span>Função no sistema</span>

                    <select name="" id="" value={role} onChange={(e)=> setRole(e.target.value)}>
                    <option value="usuario">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="administrador">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>

            <p>{name}</p>
            <p>{email}</p>
        </>

    )
}

export default Form