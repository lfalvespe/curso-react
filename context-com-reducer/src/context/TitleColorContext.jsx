import { createContext, useReducer } from "react"


export const TitleColorContext = createContext()

export const TitleColorContextProvider = ({children}) => {

    const titleColorReducer = (state, action) => {

        switch(action.type) {
            case "RED":
                return {...state, color: "red"}
            case "BLUE":
                return {...state, color: "blue"}
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"})

 

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )

}