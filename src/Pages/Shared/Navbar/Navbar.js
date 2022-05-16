import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, error, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (

        <div className="navbar bg-base-100 top-0 sticky z-20">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <button className=' mx-2'> <CustomLink to={'/home'}>Home</CustomLink></button>
                        <button className=' mx-2'>  <CustomLink to={'/about'}>About</CustomLink></button>
                        <button className=' mx-2'>  <CustomLink to={'/appoinment'}>Appoinment</CustomLink></button>
                        <button className=' mx-2'><CustomLink to={'/reviews'}>Reviews</CustomLink></button>
                        <button className=' mx-2'><CustomLink to={'/contact'}>Contact Us</CustomLink></button>

                        {
                            user && <button className=' mx-2'><CustomLink to={'/dashboard'}>Dashboard</CustomLink></button>
                        }
                        {
                            !user ? <button className=' mx-2'><CustomLink to={'/login'}>Login</CustomLink></button> : <button onClick={handleSignOut} className=' mx-2'>Signout</button>
                        }
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                {
                                    user && <img src={user?.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} />
                                }

                            </div>
                        </div>
                    </ul>
                </div>


                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-end">
                <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    <button className=' mx-2'> <CustomLink to={'/home'}>Home</CustomLink></button>
                    <button className=' mx-2'>  <CustomLink to={'/about'}>About</CustomLink></button>
                    <button className=' mx-2'>  <CustomLink to={'/appoinment'}>Appoinment</CustomLink></button>
                    <button className=' mx-2'><CustomLink to={'/reviews'}>Reviews</CustomLink></button>
                    <button className=' mx-2'><CustomLink to={'/contact'}>Contact</CustomLink></button>
                    {
                        user && <button className=' mx-2'><CustomLink to={'/dashboard'}>Dashboard</CustomLink></button>
                    }
                    {
                        !user ? <button className=' mx-2'><CustomLink to={'/login'}>Login</CustomLink></button> : <button onClick={() => signOut(auth)} className=' mx-2 btn btn-outline'>Signout</button>
                    }
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            {
                                user && <img src={user?.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} />
                            }

                        </div>
                    </div>

                </ul>
            </div>


        </div>

    );
};

export default Navbar;