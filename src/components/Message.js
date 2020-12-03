import React from 'react'
import '../App.css'

const Message = ({msg, alt}) => {
    if (alt) {
        return (
            <div className='msg'>
                <p className='right'>{msg.text}</p>
            </div>
        )
    }
    return (
        <div className='msgLeft'>
                <p className='left'>{msg.text}</p>
        </div>
    )
}

export default Message;