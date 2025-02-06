import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { useEffect } from "react";
import Search from "./Search";

function Userproduct(){

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
          console.log(res.data);
          setProduct(res.data);
    }

    return(
        <>
        <br/><br/><br />
        <Search />
        <br/><br/>
        <button onClick={fetchData} className="btn btn-success">AllProduct</button>
        <br />
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {
            product && 
            product.map((product,ind)=>{
                return(
            <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td><Link to={`/${product.id}/addCart`}>BuyNow</Link></td>
          </tr> 
           );
            })
          }
          
        </table>
        <br/><br/><br /> <br/><br/><br />
    </>
    );
}

export default Userproduct;