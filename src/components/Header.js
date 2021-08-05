import React from 'react'
import Paper from '@material-ui/core/Paper';


function Header() {
    return (
        <Paper style={{padding: "5px", display: "flex"}} square elevation={3}>
            <img className="logo-header" src="https://img.icons8.com/officel/2x/react.png"></img>
            <h1 className="site-header"> New Contact ListJS</h1>
        </Paper>
    )
}

export default Header
