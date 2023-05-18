import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Blog from "../Random component/Blog";



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
}


      ]
    },
  ]);

  export default router;