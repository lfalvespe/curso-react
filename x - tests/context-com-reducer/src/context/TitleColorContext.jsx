import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const TitleColorContextProvider = ({ children }) => {

    const TitleColorReducer = (state, action) => {
        switch (action.type) {

            case "RED":
                return { ...state, color: "red" }
            case "BLUE":
                return { ...state, color: "blue" }
            default:
                return state

        }

    }

    const [state, dispatch] = useReducer(TitleColorReducer, {color: "purple"})

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}