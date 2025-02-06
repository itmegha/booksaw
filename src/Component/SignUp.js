import axios from "axios";
import React, { useState } from "react";


function SignUp(){
  
  const [user,setUser] = useState({
    "name":'',
    "email":'',
    "pass":'',
    "cpass":''
  })

  const handleChange = (e)=>{
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value
      }
    );
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
       await axios.post('http://localhost:8080/user/adduser',user);
       alert('user added successfully');
       setUser({'name':'','email':'','pass':'','cpass':''})
    }
    catch(e){
      alert(e);
    }
  }
    return(
          <>
      <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4" id="form1">

      <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="name" class="form-label">Name :</label>
    <input type="text" 
    className="form-control" 
    id="name" placeholder="Enter name" 
    name="name" 
    value={user.name}
    onChange={handleChange}
    />
  </div>
  <div>
  <label htmlFor="email" class="form-label">Email :</label>
    <input type="text" 
    className="form-control" 
    id="email" 
    placeholder="Enter email" 
    name="email"
    value={user.email}
    onChange={handleChange}
       />
  </div>
  <div className="mb-3">
    <label htmlFor="pass" className="form-label">Password :</label>
    <input type="text" 
    class="form-control" 
    id="pass"
     placeholder="Enter password" 
     name="pass"
     value={user.pass}
     onChange={handleChange}
     />
  </div>
  <div className="mb-3">
    <label htmlFor="cpass" className="form-label">Cpass:</label>
    <input type="text" 
    class="form-control" 
    id="cpass" 
    placeholder="Enter address" 
    name="cpass"
    value={user.cpass}
    onChange={handleChange}
    />
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
      </div>
      <div className="col-sm-4"></div>
      
      </div>
        </>
    );
}
export default SignUp;