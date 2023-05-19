import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Blog from "../Random component/Blog";
import Login from "../Authentications/Login";
import Signup from "../Authentications/Signup";
import AddToy from "../Random component/AddToy";
import Private from "./Private";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
{
    path:'/'
    ,
    element:<Home></Home>
},
{
    path:'/blog'
    ,
    element:<Blog></Blog>
},
{
    path:'/login'
    ,
    element:<Login></Login>
},

{
    path:'/signup'
    ,
    element:<Signup></Signup>
},
{
    path:'/addtoy'
    ,
    element: 
    <Private>
    <AddToy></AddToy></Private>
},

      ]
    },
  ]);

  export default router;