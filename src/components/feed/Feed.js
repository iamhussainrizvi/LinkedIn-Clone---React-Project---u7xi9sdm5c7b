import "../feed/feed.css"
import React, { useEffect, useRef, useState } from 'react'
// import firebase from "firebase"
import { db } from '../../firebase'

import { collection, addDoc, getDocs } from "firebase/firestore"; 
// importing components
import { Avatar } from '@material-ui/core'
import HeaderOption from '../header/HeaderOption'
import FlipMove from "react-flip-move";
import Post from '../post/Post'
// importing icons
import { profilePicURL } from "../../public/img";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Feed({userName}) {

    const [input, setInput]=useState("");
    const [posts, setPosts] = useState([]);

    async function handleSubmit(e){
        e.preventDefault();
        try
        {
            const docRef = await addDoc(collection(db, "users"), { 
                name:userName,
                description:"Software engineer || Problem solver",
                message: input,
                timeStamp : new Date().getTime()
            });
            setInput("");
            await fetchData();
            // console.log("posts",posts);
            // console.log("Document written with ID: ", docRef.id);
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    async function fetchData(){

        const querySnapshot = await getDocs(collection(db, "users"));
        const arr =[];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            arr.push(doc.data());
        })

        arr.sort((a,b)=> b.timeStamp - a.timeStamp);
        // console.log("arr",arr);
        setPosts( prev => [...arr]);
        

    }

    useEffect(()=>{

        fetchData();

    },[])



  return (
    <div className='feed'>
    <div className="feed__input">
        <Avatar src={profilePicURL}/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Start a post' value={input}  onChange={(e)=>{
                setInput(e.target.value);
            }} />

            {/* <input type="submit" /> */}
        </form>
    </div>
    <div className="feed__options">
        <div className="option">
            <PhotoIcon style={{color:"#70b5fe"}}/> 
            <span>Photo</span>
        </div>
        <div className="option">
            <YouTubeIcon style={{color:"#7fc15e"}}/> 
            <span>Video</span>
        </div>
        <div className="option">
            <TodayIcon style={{color:"#e7a33e"}}/> 
            <span>Audio event</span>
        </div>
        <div className="option">
            <AssignmentIcon style={{color:"#fc9295"}}/> 
            <span>Write article</span>
        </div>
    </div>
    <div className="post__container">
            <FlipMove>
            {
                posts?.map( ({description, message, name, timeStamp}) => (
                    <Post 
                        key={timeStamp}
                        name = {name} 
                        description = {description}
                        message= {message}
                    />
                ))
            }
            </FlipMove>


        </div>
    </div>
  )
}
export default Feed


