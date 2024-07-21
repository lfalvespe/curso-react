const Titulo5 = () => {

    const n = 11

    return (
        <>
            <h2 style={n > 10 ? {color: 'green'} : {color:'orange'}}>Titulo5</h2>

            Aqui a estilização é dinâmica
        </>
    )
}

export default Titulo5