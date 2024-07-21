import { createContext, useState } from "react"

// Criando o Context
export const CounterContext = createContext()

//Criando o Provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}