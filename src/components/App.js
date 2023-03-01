import React, { useEffect, useState } from 'react'
import '../styles/App.css';


//components
import Login from './auth/login';
import SignUp from './auth/SignUp';
import Header from './header/Header';
import Sidebar from './left_sidebar/Sidebar';
import SecondarySidebar from './left_sidebar/SecondarySidebar';
import Feed from './feed/Feed';
import RightSidebar from './rightSidebar/RightSidebar';
import { favIconURL } from '../public/img';


const App = () => {
  
  const [user,setUser] = useState(false); 
  const [userName,setUserName] = useState("");

  const setFavIcon= ()=> {
    const link = document.createElement("link")
    link.setAttribute("rel", "icon");
    link.setAttribute("type", "image/x-icon");
    link.setAttribute("href", favIconURL);
    document.head.appendChild(link);
  }

  function loggedIn(){
    setUser(true);
  }

  function loggedOut(){
    setUser(false);
  }

  function updateUserName(name){
    setUserName(name);

  }

  useEffect(()=>{
    
    setFavIcon();
    
    
    const isLoggedin = localStorage.getItem("userIsLoggedIn");
    // console.log("in app login check");
    if(isLoggedin){
      loggedIn();
    }

  })
  

  return (
<>

    { !user?(<SignUp  updateLogin = {loggedIn}  updateUserName={updateUserName} />):(<>
    <div id="main">
      <div className="header__container">
        <Header loggedOut={loggedOut}/>
      </div>
      <div className="body__container">
      
        <div className="sidebar__container">
          <Sidebar userName={userName}/>
          <SecondarySidebar/>
        </div>
        <Feed userName={userName}/>
        <RightSidebar/>
      </div>
            
    </div>
    </>)

     }
</>
    
  )
}


export default App;
