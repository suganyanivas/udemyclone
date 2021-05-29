import React,{useState}from 'react'
import './Login.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

const login = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
       .then(auth=>{
           history.push('./')
       })
       .catch(error => alert(error.message))
    
}
    return (
        <div className="login__container"> 
          <h5>Log In to Your Account !</h5>
         
          <button className="btn_btn fb">
            <FacebookIcon className="icons"/>  Continue with Facebook
          </button>
          <button className="btn_btn b2">
              Continue with Google
          </button>
          <button className="btn_btn b2">
           <AppleIcon className="icons"/>   Continue with Apple
          </button>
        
          <form class="login__form">
         
              <input type="text" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)} />   
          
              <input type="text" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)} />   
          </form>
            
            <button type="submit" onClick={login} class="login-btn">Log In</button>
            <p>or Forgot password</p>
            <p>Don't have an account?
            <Link to="/signup">
                 Sign Up </Link>
            </p>
            
        </div>
    )
}

export default Login



