import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile(){
   useEffect(()=>{
      fetchData();
    },[])
  const navigate = useNavigate();
  useEffect(()=>{
      let username = sessionStorage.getItem('username');
      if(username === ' ' || username === null){
          navigate('/login');
      }
      if(username !== 'admin@gmail.com'){
        navigate('/login');
    }
  },[])

   const DeleteU = (id)=>{
      axios.delete(`http://localhost:8080/user/deleteU/${id}`);
      alert("User deleted");
   }
    const[users,setUsers] = useState([]);

    const fetchData = async()=>{
          const res = await axios.get(`http://localhost:8080/user/getall`);
          setUsers(res.data);     
    }
    return(
        <>
        <br/><br/><br/><br/>
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
          {
            users && 
            users.map((users,ind)=>{
                return(
            <tr>
            <td>{ind+1}</td>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.pass}</td>
            <td><button className="btn btn-success"
             onClick={()=>{
                DeleteU(users.id)
             }}
            >Delete</button></td>
          </tr> 
           );
            })
          }
          
        </table>
        <br/><br/><br/><br/>
    </>
    );
}
export default Profile;