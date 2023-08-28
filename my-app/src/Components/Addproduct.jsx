import { useState } from "react";
import "./footer.css"


const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error , setError] = useState("")

  const Addproduct = async () => {

    if (!name || !price || !company || !category) {
       setError(true);
       return false;
    }

    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    console.warn(userId)
                 
    let result = await fetch("http://localhost:5000/add-product",{
       method:"post",
       body:JSON.stringify({name, price, category, company, userId}),
       headers:{
        "Content-type":"application/json"
       }
    });
    result = await result.json();
    console.warn(result);
     
  };

  return (
    <>  
      <h1> Add Products</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="InputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
       <br></br> 
       {error && !name && <span className="invalid_input"> Enter valid name </span> }
       <br></br>
      <input
        type="text"
        placeholder="Enter product Price"
        className="InputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
      />
       <br></br> 
       {error && !price && <span className="invalid_input"> Enter valid price </span> }
       <br></br>
     
      <input
        type="text"
        placeholder="Enter product category"
        className="InputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      />
       <br></br> 
       {error && !category && <span className="invalid_input"> Enter valid category </span> }
       <br></br>
      <input
        type="text"
        placeholder="Enter product company"
        className="InputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      />
       <br></br> 
       {error && !company && <span className="invalid_input"> Enter valid company </span> }
       <br></br>
      <br></br>
      <button onClick={Addproduct} className="Addbutton" >Add to product </button>
    </>
  );
};

export default Addproduct;
