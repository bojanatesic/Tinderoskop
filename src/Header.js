import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
function Header() {
    return (
        <div className="header">
            <PersonIcon />
            <img className="header-img" src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png" alt="tinder-logo"/>
            <ForumIcon/>
        </div>
    )
}

export default Header
