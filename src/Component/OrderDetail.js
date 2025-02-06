import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OrderDetail(){

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


    const[order1,setOrderd] = useState([]);

    const fetchData = async()=>{
          const res = await axios.get(`http://localhost:8080/order/getOrder`);
          console.log(res.data);
          setOrderd(res.data);
    }
 
    return(
        <>
        <br/><br/> <br/>
        <h1>OrderDetail</h1>

        <div className="row">
            <div className="col-sm-6" id="ud">
            </div>
            <div className="col-sm-6" id="ud1">
             {
            order1 && 
            order1.map((o,ind)=>{
                return(
                    <>
                <h1>Name : {o.name}</h1>
                <h4>Date : {o.createdat}</h4>
                </>
                )
            })
            }
            </div>
        </div>

            <br/><br/>
        </>
    );
}
export default OrderDetail;