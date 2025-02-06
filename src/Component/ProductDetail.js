import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetail(){

    useEffect(()=>{
      fetchData();
    },[]);

    const navigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username === ' ' || username === null){
            navigate('/login');
        }
    },[])

    const params =  useParams();
    const[product,setProduct] = useState([]);

    const fetchData = async()=>{
          const res = await axios.get(`http://localhost:8080/product/getP/${params.id}`);
          console.log(res.data);
          setProduct(res.data);
    }
    const addToCart = (id)=>{
        axios.post(`http://localhost:8080/product/${id}/cart`,product);
        alert("added to cart!!!");
    }
 
    return(
        <>
        <br/><br/> <br/>
        <h1>ProductDetail</h1>
        <div className="row">
            <div className="col-sm-6" id="ud">
            <img src={product.image} alt="Card image" id="imgud"/>
            </div>
            <div className="col-sm-6" id="ud1">
                <h1>NovelName : {product.name}</h1>
                <h4>Genere : {product.category}</h4>
                <h5>Price : Rs.{product.price}</h5>
                <br />
                <button className="btn btn-success"
                 onClick={()=>{
                    addToCart(product.id)
                 }}
                >AddToCart</button>
            </div>
        </div>

            <br/><br/>
        </>
    );
}
export default ProductDetail;