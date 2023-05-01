import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Service from "../pages/Service/Service";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "blog",
            element: <Blog></Blog>
        },
        {
            path: "service",
            element: <Service></Service>
        },
        {
            path: "about",
            element: <About></About>
        }
      ]
    },
  ]);
  
  export default router;