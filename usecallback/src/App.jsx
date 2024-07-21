import { useCallback, useState } from 'react'

import './App.css'

import List from './components/List'

const App = () => {

  const [value, setValue] = useState(0)

  // const getItemsFromDataBase = () => {
  //   const data = ["item 1", "item 2", "item 3"]
  //   return data
  // }

  const getItemsFromDataBase = useCallback(() => {
    const data = ["item 1", "item 2", "item 3"]
    return data
  }, [])

  return(
    <>
      <h1>React Hooks</h1> <hr />
      <h2>useCallback</h2>
      <List getItems={getItemsFromDataBase}/>

      <p>Value: {value}</p>
      <button onClick={() => setValue(v => v + 1)}>Alterar Value</button>
    </>
  )
}

export default App