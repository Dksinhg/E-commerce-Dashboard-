import React from "react";
import Nav from "./Components/Nav"
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import "./App.css"
import Footer from "./Components/footer";
import SignUp from "./Components/SignUp";
import Login from "./Components/login";
import PrivateComponent from "./Components/privatecomponent";
import AddProduct from "./Components/Addproduct";
import ProductList from "./Components/ProductList";
import Updateproduct from "./Components/updateproduct";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
           <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList /> }></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={ <Updateproduct /> }></Route>
          <Route path="/logout" element={<h1>logout  component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile component</h1>}></Route>
          </Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter> 
       <Footer />

    </div>
  );
}

export default App;
