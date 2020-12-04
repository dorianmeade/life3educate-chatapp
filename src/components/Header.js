import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    const style = {
        color: '#66cdaa', 
        fontWeight: 'bold', 
        padding: 10
    }
    return (
        <div style={style}>
        <img src={logo} style={{height: 100, width: 'auto'}}/> 
        
        </div>
    )
}

export default Header;