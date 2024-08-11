import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      }
    ]
  },
]);

export default Router;