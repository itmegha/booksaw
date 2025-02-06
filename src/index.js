import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import Error_page from './Component/Error_page';
import Userproduct from './Component/Userproduct';
import Cart from './Component/Cart';
import Admin from './Component/Admin';
import AddProduct from './Component/AddProduct';
import ShowProduct from './Component/ShowProduct';
import Search from './Component/Search';
import ProductDetail from './Component/ProductDetail';
import Order1 from './Component/Order1';
import OrderDetail from './Component/OrderDetail';

const router  = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error_page />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/reg",
        element:<SignUp />
      },
      {
        path:"/login",
        element:<SignIn />
      },
      {
        path:"/userproduct",
        element:<Userproduct />
      },
      {
        path:"/product/:id",
        element:<ProductDetail />
      },
      {
        path:"/:pid/addCart",
        element:<Cart />
      },
      {
        path:"/myCart",
        element:<Cart />
      },
      {
        path:"/sdetail",
        element:<Order1 />
      },
      {
        path:"/orderd",
        element:<OrderDetail />
      },
      {
        path:"/admin",
        element:<Admin />
      },
      {
        path:"/addProduct",
        element:<AddProduct />
      },
      {
        path:"/showProduct",
        element:<ShowProduct />
      },
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/search",
        element:<Search />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


