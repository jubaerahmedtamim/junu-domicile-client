
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { LuCircleArrowRight } from "react-icons/lu";

import { Link, NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    const isAdmin = true;
    const isHost = false;

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex md:max-w-7xl mx-auto">
            <div className=' md:hidden'>
                {
                    isOpen ?
                        <button onClick={() => setIsOpen(!isOpen)} className="relative top-2 left-28 ">
                            <ImCancelCircle />
                        </button>
                        :
                        <button onClick={() => setIsOpen(!isOpen)} className=" relative top-2 left-2">
                            <LuCircleArrowRight />
                        </button>
                }
            </div>
            <div>
                <div className=" w-0 md:w-64 collapse md:visible min-h-screen bg-cyan-600 text-white">
                    <ul className="menu">
                        {
                            isAdmin ?
                                <>
                                    <li> <NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/bookings'}>Manage Users</NavLink> </li>
                                    <li> <NavLink to={'/dashboard/allUsers'}>All Users</NavLink> </li>
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
                            <li><Link to={'/'}> <FaHome /> Home </Link></li>
                        </div>
                    </ul>
                </div>
                <div
                    className={`fixed top-0 left-0 h-full w-36 z-10 min-h-screen bg-cyan-600 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <div>
                        <div className='md:hidden'>
                            {
                                isOpen ?
                                    <button onClick={() => setIsOpen(!isOpen)} className="relative top-2  left-28">
                                        <ImCancelCircle />
                                    </button>
                                    :
                                    <button onClick={() => setIsOpen(!isOpen)} className=" relative top-2 left-2">
                                        <LuCircleArrowRight />
                                    </button>
                            }
                        </div>
                    </div>
                    <nav className="">
                        <div className=" w-full md:w-64  min-h-screen bg-cyan-600 text-white">
                            <ul className="menu text-xs">
                                {
                                    isAdmin ?
                                        <>
                                            <li> <NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink> </li>
                                            <li> <NavLink to={'/dashboard/bookings'}>Manage Users</NavLink> </li>
                                            <li> <NavLink to={'/dashboard/allUsers'}>All Users</NavLink> </li>
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

                                <div className="w-1/2">
                                    <div className="divider"></div>
                                </div>
                                <div className="menu">
                                    <li><Link to={'/'}> <FaHome /> Home </Link></li>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;