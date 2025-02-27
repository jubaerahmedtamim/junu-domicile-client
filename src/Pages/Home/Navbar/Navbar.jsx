import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useHost from "../../../hooks/useHost";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isHost] = useHost();

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink> </li>
        <li><NavLink to={'/contact'}>Contact</NavLink> </li>
        <li><NavLink to={'/all-properties'}>All Property</NavLink> </li>

    </>

    const handleLogout = () => {
        logOut();
    }


    return (
        <div className=" w-full">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Junu Domicile</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <NavLink to={'/dashboard'} className='btn btn-outline btn-sm mr-2'>Dashboard</NavLink>
                    </div>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end z-10">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Role: {isAdmin? "Admin": isHost ? 'host': 'User'}</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                        </> : <Link to={'/login'}> <button className="btn btn-success btn-sm">Login</button> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;