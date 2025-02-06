import React from "react";
import { useRouteError } from "react-router-dom";

function Error_page(){
     const err = useRouteError();
    return(
        <>
            <h1>{err.status}</h1>
            <p>{err.data}</p>
        </>
    );
}
export default Error_page;