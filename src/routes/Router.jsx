import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../layout/HomeLayout';
import Login from '../pages/Login';
import Home from '../pages/Home';
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
      }
    ]
      
  }
])

export default Router;