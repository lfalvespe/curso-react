import {useState} from 'react'

const Titulo6 = () => {

    const [brownTitle] = useState(true)

    return (
        <>
            <h2 className={brownTitle ? "brown-title" : "title"}> Titulo6</h2>

            <p>Aqui a estilização é por classes dinâmicas</p>


            {/* As classes title e brown-title estão definidas no App.css*/}
        </>
    )
}

export default Titulo6