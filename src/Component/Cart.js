import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Order1 from "./Order1";


function Cart(){
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
          const res = await axios.get('http://localhost:8080/product/getAllCart');
          setProduct(res.data);     
    }

    const deleteC = (id)=>{
        axios.delete(`http://localhost:8080/product/deleteProduct/${id}`);
        alert("order placed!!!");
    }
  
    return(
        <>

        <div className="row">
        <div className="col-md-2"></div>
            <div className="col-md-4">
            <h1>ShowProduct</h1>
        <div className="card" id="cd">
          {
            product && 
            product.map((p,ind)=>{
                return(
                   <>
                   {/* <h1>{p.id}</h1> */}
                  <img className="card-img-top" src={p.product.image} alt="Card image" id="im1"/>
                  <div className="card-body">
                      <h4 className="card-title">{p.product.name}</h4>
                      <p className="card-text">{p.product.category}</p>
                      <p className="card-text">{p.product.price}</p>
                      <button className="btn btn-success"
                       onClick={()=>{
                         deleteC(p.id)
                       }}
                      >PlaceOrder</button>
                     
                </div>
                 
                </>
            );
            })
          }
        </div>
            </div>
            <div className="col-md-6">
             <Order1 />
            </div>
        </div>

        
    </>
    );
}

export default Cart;