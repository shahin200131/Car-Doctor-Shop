import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
    const navlinks = <>
        <li className='font-semibold hover:text-xl hover:text-blue-600'><Link to='/'>Home</Link></li>
        <li className='font-semibold hover:text-xl hover:text-blue-600'><Link to='/about'>About</Link></li>
        <li className='font-semibold hover:text-xl hover:text-blue-600'><Link to='/service'>Services</Link></li>
        <li className='font-semibold hover:text-xl hover:text-blue-600'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold hover:text-xl hover:text-blue-600'><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mb-5">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <span className='text-xl'><BsHandbag /></span>
                <span className='text-xl m-5'><CiSearch /></span>
                <Link to='/login'><button className="btn btn-outline btn-warning">Appintment</button></Link>
            </div>
        </div>
    );
};

export default Navbar;