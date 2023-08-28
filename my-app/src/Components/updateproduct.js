import { useEffect, useState } from "react";
import "./footer.css"
import {useParams, useNavigate} from 'react-router-dom'

const Updateproduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const params = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
        getProductDetails()
  })

  const getProductDetails = async() =>{
     console.log(params)
    let result = await fetch(`http://localhost:5000/companylist/${params.id}`)
    result = await result.json();
     console.log(result)
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

  }


  const updateProduct = async () => {
   console.log(name, price, category, company)
   let result = await fetch(`http://localhost:5000/companylist/${params.id}`,{
    method:'Put',
    body:JSON.stringify({name, price, category, company}),
    headers:{
      'Content-Type':'Application/json'
    }
   });
   result = await result.json()
    console.log(result)
   navigate('/')
  };

  return (
    <>
     <h1> Update Products</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="InputBox"
        name="name"
        value={name}
         onChange={(e)=>{ setName(e.target.value)}}
      />
       
      <input
        type="text"
        placeholder="Enter product Price"
        className="InputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
      />
      
     
      <input
        type="text"
        placeholder="Enter product category"
        className="InputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      />
     
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
      <button onClick={updateProduct} className="Addbutton" >Update product </button>
     
    </>
  );
};

export default Updateproduct;
