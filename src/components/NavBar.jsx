import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

  
    const navBarBgColor =
        location.pathname === "/"
            ? "bg-[#9538e2] text-white"
            : "bg-white text-black";

    return (
        <div className={`${navBarBgColor} w-11/12 mx-auto mb-7 rounded-t-xl`}>
            <div className="navbar flex justify-between px-24 ">
                <div>
                    <Link
                        to="/"
                        className="text-xl  bg-transparent focus:outline-none active:bg-transparent"
                    >
                        Gadget Heaven
                    </Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-bold  ${
                                        isActive ? 'underline underline-offset-4' : ''
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) =>
                                    `font-bold  ${
                                        isActive ? 'underline underline-offset-4' : ''
                                    }`
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `font-bold  ${
                                        isActive ? 'underline underline-offset-4' : ''
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/FAQ"
                                className={({ isActive }) =>
                                    `font-bold  ${
                                        isActive ? 'underline underline-offset-4' : ''
                                    }`
                                }
                            >
                                FAQ
                            </NavLink>
                        </li>
                        

                    </ul>
                </div>

                <div className="flex gap-5">
                    <div className="rounded-full text-black border  bg-white p-2">
                        <NavLink to='/dashboard/cart'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </NavLink>
                    </div>

                    <div className="flex rounded-full text-black border bg-white p-2 text-xl justify-center items-center">
                        <NavLink to='/dashboard/wishlist'
                         className="h-5 w-5">
                            <i className="fa-regular fa-heart"></i>
                        </NavLink>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default NavBar;
