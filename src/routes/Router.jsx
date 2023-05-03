import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../layout/HomeLayout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import ChefsDetails from '../pages/ChefsDetails';
const Router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
      {
          path:'/',
          element:<Home></Home>
      },
      {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/chefsdetails/:id',
        element:<ChefsDetails></ChefsDetails>
      }
    ]
      
  }
])

export default Router;