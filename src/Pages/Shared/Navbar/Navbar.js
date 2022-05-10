import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <button className=' mx-2'> <CustomLink to={'/home'}>Home</CustomLink></button>
                        <button className=' mx-2'>  <CustomLink to={'/about'}>About</CustomLink></button>
                        <button className=' mx-2'>  <CustomLink to={'/appoinment'}>Appoinment</CustomLink></button>
                        <button className=' mx-2'><CustomLink to={'/reviews'}>Reviews</CustomLink></button>
                        <button className=' mx-2'><CustomLink to={'/contact'}>Contact Us</CustomLink></button>
                        <button className=' mx-2'><CustomLink to={'/login'}>Login</CustomLink></button>
                    </ul>
                </div>


                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    <button className=' mx-2'> <CustomLink to={'/home'}>Home</CustomLink></button>
                    <button className=' mx-2'>  <CustomLink to={'/about'}>About</CustomLink></button>
                    <button className=' mx-2'>  <CustomLink to={'/appoinment'}>Appoinment</CustomLink></button>
                    <button className=' mx-2'><CustomLink to={'/reviews'}>Reviews</CustomLink></button>
                    <button className=' mx-2'><CustomLink to={'/contact'}>Contact</CustomLink></button>
                    <button className=' mx-2'><CustomLink to={'/login'}>Login</CustomLink></button>
                </ul>
            </div>

        </div>

    );
};

export default Navbar;