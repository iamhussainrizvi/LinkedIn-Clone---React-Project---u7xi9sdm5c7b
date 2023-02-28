import React from 'react'
import "../left_sidebar/sidebar.css"
//importing icons

import BookmarkIcon from "@material-ui/icons/Bookmark"
import {profilePicURL} from "../../public/img"

// importing components
import { Avatar } from '@material-ui/core'

function Sidebar({userName}) {
  return (
    <div className='sidebar'>
        <div className="sidebar__profile">
        <img src="
        https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
        " alt="user_Image" />
        <div className="profile__avatar">
        <Avatar src={profilePicURL} />
        </div>
            
            <div className="profile__details">
                <div className="username">
                    <h4>{userName}</h4>
                </div>
                <div className="userBio">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="profile__stats">
                    <div>
                        <span>Connection</span>
                        <br />
                        <span ><strong>grow your connection</strong></span>
                    </div>
                    <span className="stat__number">250</span>
                </div>
                <div className="profile__stats">
                    <span>Who viewed your profile</span>
                    <span className="stat__number">20</span>
                </div>
            </div>
            <div className="profile_info">
                
                    <p>Acess tools & insights</p>
                    <p className='call_to_action'>Try premium for free</p>
                
            </div>
            
            <div className='bookmark'>
                <BookmarkIcon/>
                <span> My items </span>

            </div>
            

        </div>
    </div>
  )
}

export default Sidebar