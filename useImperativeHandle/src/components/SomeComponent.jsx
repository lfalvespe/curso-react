import { useRef, useImperativeHandle, forwardRef } from "react"


const SomeComponent = forwardRef((props, ref) => {

    const localInputRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if(localInputRef.current.value.length > 3) {
                    localInputRef.current.value = ""
                    alert("Número de caracteres excedido!")
                }
            }
        }
    })

    return (

        <>
            <p>Insira no máximo 3 caracteres.</p>
            <p><input type="text" ref={localInputRef} /></p>
        </>
    )

})


export default SomeComponent