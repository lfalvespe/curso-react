import { useRef, useEffect } from "react"


export const usePrevious = (value) => {

    let previousValue = useRef()

    useEffect(() => {

        previousValue.current = value

    }, [value])

    return previousValue.current

}