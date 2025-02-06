import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function AddProduct(){

    const navigate = useNavigate();
  useEffect(()=>{
      let username = sessionStorage.getItem('username');
      if(username === ' ' || username === null){
          navigate('/login');
      }
  },[])

   const [product,setProduct] = useState({
      "name":'',
      "category":'',
      "price":'',
      "image":''
    })
  
   
    const handleChange = (e)=>{
      setProduct(
        {
          ...product,
          [e.target.name]:e.target.value
        }
      );
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
           await axios.post('http://localhost:8080/product/addProd',product);
           alert('product added successfully');
           setProduct({'name':'','category':'','price':'','image':''})
        }
        catch(e){
          alert(e);
        }
      }


    return(
       <>
        <h1>AddProduct</h1>
        <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4" id="form1">

      <form onSubmit={handleSubmit}>
  <div>
  <label htmlFor="name" class="form-label">Product Name :</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    placeholder="Enter product" 
    name="name"
    value={product.name}
    onChange={handleChange}
       />
  </div>
  <div className="mb-3">
    <label htmlFor="category" className="form-label">Category :</label>
    <input type="text" 
    class="form-control" 
    id="category"
     placeholder="Enter category" 
     name="category"
     value={product.category}
     onChange={handleChange}
     />
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price :</label>
    <input type="text" 
    class="form-control" 
    id="price"
     placeholder="Enter price" 
     name="price"
     value={product.price}
     onChange={handleChange}
     />
      <div className="mb-3">
    <label htmlFor="image" className="form-label">Image :</label>
    <input type="text" 
    class="form-control" 
    id="image"
     placeholder="Enter image url" 
     name="image"
     value={product.image}
     onChange={handleChange}
     />
  </div>
  <button type="submit" className="btn btn-success">AddProduct</button>
  </div>
</form>
      </div>
      <div className="col-sm-4"></div>
      
      </div>
       </>
    );
}
export default AddProduct;