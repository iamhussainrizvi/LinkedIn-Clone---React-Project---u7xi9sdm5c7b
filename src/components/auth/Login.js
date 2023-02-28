import React, { useState } from 'react'


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./login.css"

function Login({toggleSignup,updateLogin}) {

function handleLogin(e){
  e.preventDefault();

  const email = document.forms[0].elements[0].value;
  const password = document.forms[0].elements[1].value;


  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // console.log(user);
    // console.log("Authenticated");
    // console.log(updateLogin);
    localStorage.setItem("userIsLoggedIn", true);
    updateLogin();

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    if(errorCode==="auth/user-not-found"){
      alert("please sign up first");
    }
  });
  
}



  return ( 
    <div className='login__screen'>
      <div className='form__container'>
      <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-40.125525 -16.3118 347.75455 97.8708"><path fill="#0a66c2" d="M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"/><path fill="#0a66c2" d="M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg>

          <form action="" onSubmit={handleLogin}>
          
          <input type="email" name="" id="" placeholder='email' required />
          <br />

          
          <input type="password" name="" id="" placeholder='Password' required />
          <br />

          <div className='buton_container'>
          <button type='submit'>Sign-in</button>
          </div>

          <div className='sign_in'>
            <h4>Not a member? <span onClick={toggleSignup}>Sign up</span></h4>
              
          </div>

        </form>

        </div>
    </div>
  )
}

export default Login