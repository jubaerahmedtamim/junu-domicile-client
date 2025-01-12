import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Layouts/Dashboard";
import Booking from "../Pages/Dashboard/User/Booking/Booking";
import UserDashboard from "../Pages/Dashboard/User/UserDashboard/UserDashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>,
            },
            {
                path: 'all-properties',
                element: <AllProperties></AllProperties>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin
            {
                index: true,
                element: <AdminHome></AdminHome>,
            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>,
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>,
            },
            {
                path: 'UserDashboard',
                element: <UserDashboard></UserDashboard>,
            },
            {
                path: 'booking',
                element: <Booking></Booking>
            }
        ]
    }
])
