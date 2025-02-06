import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Order1(){

    const navigate = useNavigate();
  useEffect(()=>{
      let username = sessionStorage.getItem('username');
      if(username === ' ' || username === null){
          navigate('/login');
      }
  },[])

   const [Order1,setOrder] = useState({
      "name":'',
      "email":'',
      "address":'',
      "phone":''
    })
  
   
    const handleChange = (e)=>{
      setOrder(
        {
          ...Order1,
          [e.target.name]:e.target.value
        }
      );
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
           await axios.post('http://localhost:8080/order/addorder',Order1);
           alert('address added successfully');
           setOrder({'name':'','email':'','address':'','phone':''});
           navigate('/orderd');
        }
        catch(e){
          alert(e);
        }
      }


    return(
       <>
        <h1>ShippingAddress</h1>
        <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4" id="form1">

      <form onSubmit={handleSubmit}>
  <div>
  <label htmlFor="name" class="form-label">ShippingAddress :</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    placeholder="Enter name" 
    name="name"
    value={Order1.name}
    onChange={handleChange}
       />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email :</label>
    <input type="email" 
    class="form-control" 
    id="email"
     placeholder="Enter email" 
     name="email"
     value={Order1.email}
     onChange={handleChange}
     />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address :</label>
    <input type="text" 
    class="form-control" 
    id="address"
     placeholder="Enter address" 
     name="address"
     value={Order1.address}
     onChange={handleChange}
     />
      <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone :</label>
    <input type="text" 
    class="form-control" 
    id="phone"
     placeholder="Enter phone" 
     name="phone"
     value={Order1.phone}
     onChange={handleChange}
     />
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  </div>
</form>
      </div>
      <div className="col-sm-4"></div>
      
      </div>
       </>
    );
}
export default Order1;