import React, { useContext,useEffect,useState } from "react"
import {link,useNavigate} from 'react-router-dom'


function Register() {
      const navigate =useNavigate();
      const {success,loading,user}=useContext ();
      const [username,setUsename]=useState ("");
      const [email,setEmail]=useState("")
      const {password,setPassword}=useState();

      useEffect(()=>{
          if (success){
            navigate("/")
          }
      },[success])

  return (
    <from className="form">
         <div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" className="form-control" placeholder="enter a username"
              value={username}/>
                
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="email" className= 'form-control'
              placeholder="example@gmail.come" value={email}/>
                
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" className="form-control"
              placeholder="enter a valid password" value={password}/>
                
            </div>
            <button type= "submit">

            </button>
            <div className="row">
                I already have an account
                <Link to="/login">
                  login to your account
                </Link>
            </div>
         </div>
    </from>
  )
}

export default Register