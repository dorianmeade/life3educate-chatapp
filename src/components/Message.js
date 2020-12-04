import React from 'react'
import '../App.css'
import { ListGroupItem } from 'reactstrap';

const Message = ({msg, alt}) => {

    const rightStyle={
        width: 300, 
        float:'right',
        backgroundColor: 'black', 
        color: '#66cdaa', 
        padding: 7, 
        borderRadius: 10, 
        marginRight: 25
    }

    const leftStyle={
        width: 300, 
        float:'left', 
        backgroundColor: '#66cdaa', 
        padding: 7, 
        borderRadius: 10
    }
    
    if (alt) {
        return (
        <ListGroupItem style={rightStyle}>
            {msg.text}
        </ListGroupItem>
        )
    }
    return (
        <ListGroupItem style={leftStyle}>
            {msg.text}
        </ListGroupItem>

    )
}

export default Message;