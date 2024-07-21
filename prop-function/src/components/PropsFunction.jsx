import React from 'react'

const PropsFunction = ({myFunction}) => {
  return (
    <>
        <h3>Ação realizada pela função que vem como prop do componente Pai.</h3>
        <button onClick={myFunction}>Ação</button>
    </>
  )
}

export default PropsFunction