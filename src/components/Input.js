import React, {useContext} from 'react'

import {globalContext} from '../state/GlobalState'
import {sendMsg} from '../util/api'

const Input = () => {
    const {state, dispatch} = useContext(globalContext)

    const handleEnter = async (e) => {
        if(e.key === "Enter") {
            let user_message = e.target.value
            document.getElementById('myForm').value = '';
            dispatch({type: 'enqueue_message', payload: {text: user_message, name:'user'}})
            let data = await sendMsg(user_message);
            dispatch({type: 'enqueue_message', payload: {text: data, name:'bot'}})

        }
    }
    return (
        <input 
            id='myForm'
            type="text"
            placeholder="Type something..."
            onKeyDown={handleEnter}
        />
    )
}

export default Input;