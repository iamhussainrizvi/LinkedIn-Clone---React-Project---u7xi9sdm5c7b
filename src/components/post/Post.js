import React, { useEffect, useState } from 'react'
import "../post/post.css"

//importing Components
import { Avatar } from '@material-ui/core'
//importing icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import RepeatIcon from '@material-ui/icons/Repeat';
import SendIcon from '@material-ui/icons/Send';
import { profilePicURL } from '../../public/img';

function Post({name,description,message}) {

    const [liked, setLiked] = useState(false);

  return (
    <div className='posts'>
        
        <div className="post__header">
            <div className="post__header__left">
                <div><Avatar src={profilePicURL}/></div>
                <div className="post__profile__details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__header__right"><MoreVertIcon/></div>
        </div>
        <div className="post__input">
            <p>{message}</p>
        </div>
        
        <div className="post__footer">
            <div className="footer__icons" onClick={()=>{ 
                setLiked((prev)=> !prev);
                
                }}>
                <ThumbUpIcon style={{color: liked?"blue":"#aaa"}}/>
                <span>Like</span>
            </div>
            <div className="footer__icons">
                <CommentIcon/>
                <span>Comment</span>
            </div>
            <div className="footer__icons">
                <RepeatIcon/>
                <span>Repost</span>
            </div>
            <div className="footer__icons">
                <SendIcon/>
                <span>Send</span>
            </div>
        </div>
    </div>
  )
}

export default Post