import React, { useEffect, useState } from "react";
import "./signup.css"
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //check user data login or not 
  useEffect( ()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  });


   //define function here 
   const collectData =  async() => {
    console.warn(name, password, email);
    let result = await fetch("http://localhost:5000/register",{
    method:'post',
    body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
     result = await result.json();
     console.warn(result);
     localStorage.setItem("user", JSON.stringify(result))
     navigate('/')
  };

  return (
    <div className="signup">
      <h1> Register </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      /> <br></br>

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
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default SignUp;
