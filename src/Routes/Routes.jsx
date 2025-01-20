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
import PaymentsHistory from "../Pages/Dashboard/Admin/PaymentsHistory/PaymentsHistory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProperty from "../Pages/Dashboard/Host/AddProperty/AddProperty";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import ManageProperties from "../Pages/Dashboard/Host/ManageProperties/ManageProperties";

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
                element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>,
            },
            {
                path: 'propertyDetails/:id',
                element: <PrivateRoute> <PropertyDetails></PropertyDetails> </PrivateRoute>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
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
                path: 'paymentsHistory',
                element: <PaymentsHistory></PaymentsHistory> ,
            },
            // hosts
            {
                path: 'addProperties',
                element: <AddProperty></AddProperty>,
            },
            {
                path: 'manageProperties',
                element: <ManageProperties></ManageProperties>,
            },
            // users
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
