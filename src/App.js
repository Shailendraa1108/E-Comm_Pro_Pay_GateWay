import React from 'react';

import { ProductList } from './features/product-list/ProductList';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home> ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
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
