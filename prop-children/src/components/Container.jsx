import React from 'react'

const Container = ({children}) => {
  return (
    <>
      <hr />
      <h3>Componente Container</h3> 

      {children}

      <hr />
    </>
  )
}

export default Container