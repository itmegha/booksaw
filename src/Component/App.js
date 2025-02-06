import React from "react";
import { Outlet } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";


function App(){
    return(
        <>
          <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BookSaw</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mydiv">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mydiv">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reg" >SignUp</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/login">SignIn</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/login"}>Logout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/myCart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </header>
          <main>
          <br /><br /><br />
            <Outlet />
            <br /><br /><br />
          </main>
          
           <footer class="footer bg-dark">
               <div class="container text-center">
               <span class="text-white">
                All rights are reserved...
                <h1><FacebookIcon /><TwitterIcon /><YouTubeIcon /></h1>
              </span>
             </div>
          </footer>

        </>
    );
}
export default App;