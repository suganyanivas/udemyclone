import React,{ useState} from 'react'

import './Signup.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
    const history = useHistory();
    const [email,setEmail]= useState('');
    const[password, setPassword]= useState('');

    const signup = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            if(auth)
            {
                history.push('/');
            }
        })
        .catch(error =>alert(error.message))
    }
    return (
        <div class="signup__container">
            <h5>Signup and Start Learning !</h5> 
            <form class="signup__form">
                <input type="text" placeholder="Full Name" />
                <input type="text" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)} />

                </form>
                
           <p className="check">
           <input type="checkbox" value="check" id="check" name="check"/>
            <label htmlFor="check" name="check">I’m in for emails with exciting discounts and personalized recommendations</label>
            </p>
        <button type="submit" onClick={signup} className="sign__btn">Sign Up</button>
        <p>Already have an account? 
            <Link to ='./login'>Log In </Link></p>
        </div>
    )
}

export default Signup

