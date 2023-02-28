import React from 'react'

// importing components
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';
import {profilePicURL} from "../../public/img"

// importing icons 
import SearchIcon from '@material-ui/icons/search';
import HomeIcon from '@material-ui/icons/home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';



//importing css
import '../header/Header.css'



function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <div className="header__logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" height="35px" alt="Linkedin_Logo" />
            </div>
            <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder='search' name="" id="" />

            </div>
        </div>
        <div className="header__right">
            <HeaderOption icon ={<HomeIcon/>} title="Home" />
            <HeaderOption icon ={<PeopleIcon/>} title="My Network" />
            <HeaderOption icon ={<BusinessCenterIcon/>} title="Jobs" />
            <HeaderOption icon ={<MessageIcon/>} title="Messaging" />
            <HeaderOption icon ={<NotificationsIcon/>} title="Notifications" />
            <HeaderOption avatar ={<Avatar src={profilePicURL} />} title="me"     />




        </div>
    </div>
  )
}

export default Header