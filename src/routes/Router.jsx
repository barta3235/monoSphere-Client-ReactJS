import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/add-job',
        element: <AddJob></AddJob>
      },
      {
        path:'/my-posted-jobs',
        element:<MyPostedJobs></MyPostedJobs>
      }
    ]
  },
]);

export default Router;