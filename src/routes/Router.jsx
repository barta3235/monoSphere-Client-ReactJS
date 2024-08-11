import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
]);

export default Router;