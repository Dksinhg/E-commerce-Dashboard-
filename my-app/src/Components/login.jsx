import React, { useEffect, useState } from "react";
import "./login.css"
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  useEffect(()=>{
     const auth = localStorage.getItem('user');
     if(auth){
      navigate('/')
     }
  })

  const collectData = async() => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login" ,{
       method:'post',
       body : JSON.stringify({email, password}),
       headers:{
        'Content-type':'application/json'
       }
    });
    result = await result.json();
    console.warn(result);
    //
    if(result.name){
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/')
    }else{
      alert("Please enter correct details")
    }

  };

  return (
    <div className="login">
      <h1> Login </h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      /><br></br>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <br></br>
      <div className="buttom">
        <button onClick={collectData} className="appbuttom" type="buttom">
         Loign
        </button>
      </div>
    </div>
  );
};
export default Login;
