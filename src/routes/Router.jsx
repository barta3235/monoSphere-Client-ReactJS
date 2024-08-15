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
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";


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
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/add-job',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:'/my-posted-jobs',
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:'/update/:id',
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path:'/my-bids',
        element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path:'/bid-requests',
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      }
    ]
  },
]);

export default Router;