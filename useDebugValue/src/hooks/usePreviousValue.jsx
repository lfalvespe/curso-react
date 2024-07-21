import { useRef, useEffect, useDebugValue } from "react"

export const usePreviousValue = (number) => {

const previousValue = useRef

useDebugValue("Debugando")
useDebugValue("O número é " + number)

useEffect(() => {
    previousValue.current = number
})

return previousValue.current

}