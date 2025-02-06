import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Height } from "@mui/icons-material";

function ShowProduct(){

    useEffect(()=>{
        fetchData()
     },[]);
    const navigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username === ' ' || username === null){
            navigate('/login');
        }
    },[])
    
    const[product,setProduct] = useState([]);

    const fetchData = async()=>{
          const res = await axios.get('http://localhost:8080/product/getAllProduct');
          setProduct(res.data);     
    }

    const deleteP = (id)=>{
       try{
            axios.delete(`http://localhost:8080/product/deleteProd/${id}`);
           alert("product deleted");
       }
       catch(e){
        alert(e);
       }
    }

    // const editP = (id)=>{

    // }

    return(
       <>
        <h1>ShowProduct</h1>
        <div className="card" id="cd">
          {
            product && 
            product.map((p,ind)=>{
                return(
                   <>
                  <img className="card-img-top" src={p.image} alt="Card image" id="im1"/>
                  <div className="card-body">
                      <h4 className="card-title">{p.name}</h4>
                      <p className="card-text">{p.category}</p>
                      <p className="card-text">{p.price}</p>
                      <button className="btn btn-success" onClick={()=>{
                           deleteP(p.id)
                      }}>Delete</button>
                     {/* <button className="btn btn-success" onClick={()=>{
                            editP()
                     }}>Edit</button> */}
                </div>
                </>
            );
            })
          }
        </div>
       </>
    );
}
export default ShowProduct;