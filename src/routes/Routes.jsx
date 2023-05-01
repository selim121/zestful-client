import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Service from "../pages/Service/Service";
import About from "../pages/About/About";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


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
        },
        {
            path: "sign-in",
            element: <SignIn></SignIn>
        },
        {
            path: "sign-up",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);
  
  export default router;