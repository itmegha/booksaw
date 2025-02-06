import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function SignIn(){
  useEffect(()=>{
    sessionStorage.clear();
   },[])
   const navigate = useNavigate();
    const [loguser,setLogUser] = useState({
        "email":'',
        "pass":'',
      })   
      const handleChange = (e)=>{
        setLogUser(
          {
            ...loguser,
            [e.target.name]:e.target.value
          }
        );
      }
    
      const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
          if(loguser.email=='admin@gmail.com' && loguser.pass=='admin@123'){
            alert("admin loged in");
            sessionStorage.setItem('username',loguser.email);
            navigate('/admin')
         }
         else{
          const res =  await axios.post('http://localhost:8080/user/login',loguser);
          if(res.data===true){
            alert('user logged successfully');
            sessionStorage.setItem('username',res.data.email);
            navigate("/userproduct")
            setLogUser({'email':'','pass':''})
          }
          else{
            navigate("/login")
            setLogUser({'email':'','pass':''})
          }
          
        }
      }
        catch(e){
          alert(e);
        }
      }

    return(
        <>
            <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4" id="form1" >

      <form onSubmit={handleSubmit}>
  <div>
  <label htmlFor="email" class="form-label">Email :</label>
    <input type="text" 
    className="form-control" 
    id="email" 
    placeholder="Enter email" 
    name="email"
    value={loguser.email}
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
     value={loguser.pass}
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
export default SignIn;