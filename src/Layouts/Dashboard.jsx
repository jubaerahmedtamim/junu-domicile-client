import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    const isAdmin = true;
    const isHost = false;
    return (
        <div className="flex md:max-w-7xl mx-auto">
            <div className="w-64 min-h-screen bg-cyan-600 text-white">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li> <NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink> </li>
                                <li> <NavLink to={'/dashboard/bookings'}>Manage Users</NavLink> </li>
                                <li> <NavLink to={'/dashboard/users'}>All Users</NavLink> </li>
                            </>
                            :
                            isHost ?
                                <>
                                    <li> <NavLink to={'/dashboard/adminHome'}>Host Home</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/addItems'}>HOst Add Items</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/manageItems'}>Mange Items</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/bookings'}>Manage Booking</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/users'}>All Users</NavLink> </li>
                                </>
                                :
                                <>
                                    <li><NavLink to={'UserDashboard'}> User Home</NavLink> </li>
                                    <li><NavLink to={'booking'}>My Bookings</NavLink> </li>
                                    <li><NavLink to={'payments'}>Payments History</NavLink> </li>
                                </>
                    }
                    
                    <div className="divider"></div>
                    <div className="menu">
                        <li><Link to={'/'}> Home </Link></li>
                    </div>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;