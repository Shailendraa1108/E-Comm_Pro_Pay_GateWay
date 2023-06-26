import React from 'react';

import './App.css';

import Home from './pages/Home';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import Cartpage from './features/cart/Cart';
import Cheakout from './pages/Cheakout';
import DetailsPageProduct from './pages/DetailsPageProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <Cartpage></Cartpage>,
  },
  {
    path: "/checkout",
    element: <Cheakout></Cheakout>,
  },
  {
    path: "/product-details",
    element: <DetailsPageProduct></DetailsPageProduct>,
  },
]);



function App() {
  return (
    <div className="App">
  
    {/* <Home/> */}
    {/* <LoginPage/> */}
    {/* <SignUpPage/> */}
    <RouterProvider router={router} />


    </div>
  );
}
export default App;
