import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import {IconButton}  from '@material-ui/core';
import './Header.css'
function Header() {
    return (
        <div className="header">
            <IconButton className="icon-button">
            <PersonIcon className="header-icon" fontSize="large" />
            </IconButton>
            <img className="header-img" src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png" alt="tinder-logo"/>
            <IconButton className="icon-button">
            <ForumIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
