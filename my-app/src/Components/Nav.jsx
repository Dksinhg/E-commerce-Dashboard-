import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };

  return (
    <div className="main_header">
    
       <img 
       alt="logo"
       className="logo"
       src="https://tse1.mm.bing.net/th?id=OIP.fcaI02XWs8lh2iqhejVryAAAAA&pid=Api&P=0&h=180"/>

        {auth ? (
          <ul className="nav-ul"> 
         <li><Link to="/">Home</Link> </li>
        <li><Link to="/Add">Add Product </Link> </li>
        <li><Link to="/update">Update Product </Link></li>
        <li><Link to="/Profile">Profile</Link> </li>
          <li> <Link onClick={logout} to="/logout"> logout({JSON.parse(auth).name}) </Link> </li>
          </ul>
        ) : (
          <>
          <ul className="nav-ul nav-right ">
            <li> <Link to="/SignUp">SignUp</Link> </li>
            <li> <Link to="/login">Login</Link></li>
            </ul>
          </>
        )}
     
    </div>
  );
};

export default Nav;
