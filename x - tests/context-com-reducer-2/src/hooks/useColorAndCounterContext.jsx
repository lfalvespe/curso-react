import { useContext } from "react"


import { ColorAndCounterContext } from "../context/ColorAndCounterContext"


export const useColorAndCounterContext = () => {

    const context = useContext(ColorAndCounterContext)

    if(!context) {
        console.log("Contexto não encontrado!")
    }

    return context
}