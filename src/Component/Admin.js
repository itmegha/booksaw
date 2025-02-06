import React from "react";
import { Link } from "react-router-dom";

function Admin(){
    return(
        <>
        <br/><br/><br/>
            <h1>This is Admin</h1>
            <br/>
             <Link to="/addProduct" className="btn btn-success">AddProduct</Link>
             <Link to="/showProduct" className="btn btn-success">ShowProduct</Link>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}
export default Admin;