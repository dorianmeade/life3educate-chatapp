import React, {createContext, useReducer} from 'react'

const globalState = {
    message_queue: []
}

export const globalContext = createContext(globalState)

const reducer = (state, action) => {
    switch(action.type) {
        case 'enqueue_message':
            return {
                ...state, 
                message_queue: [...state.message_queue, action.payload]
            }
        default:
            throw new Error('invalid action')
    }
}
export const GlobalState = ({children}) => {

    const [state, dispatch] = useReducer(reducer, globalState);

    return (
        <globalContext.Provider
            value={{state, dispatch}}
        >
            {children}
        </globalContext.Provider>
    )
}

