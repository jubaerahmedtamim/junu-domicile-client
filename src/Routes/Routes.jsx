import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Layouts/Dashboard";
import Booking from "../Pages/Dashboard/User/Booking/Booking";
import UserDashboard from "../Pages/Dashboard/User/UserDashboard/UserDashboard";

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
