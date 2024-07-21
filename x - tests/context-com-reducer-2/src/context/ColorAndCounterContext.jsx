import { createContext, useReducer } from "react"

export const ColorAndCounterContext = createContext()

export const ColorAndCounterContextProvider = ({children}) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
                return {...state, counter: state.counter + 1}
            case "DECREMENT":
                return {...state, counter: state.counter - 1}
            case "CHANGERED":
                return {...state, titleColor: "red"}
            case "CHANGEGREEN":
                return {...state, titleColor: "green"}
            case "SHOWHIDE":
                return {...state, isShow: !state.isShow}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        titleColor: "blue",
        isShow: true
    })

    return(
        <ColorAndCounterContext.Provider value={{state, dispatch}}>
            {children}
        </ColorAndCounterContext.Provider>
    )
}