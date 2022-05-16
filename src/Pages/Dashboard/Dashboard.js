import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h1 className='text-3xl text-purple-500 font-bold'>Welcome to your Dashboard</h1>
                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My appoinment</Link></li>
                    <li><Link to={'/dashboard/myreview'}>My review</Link></li>
                    <li><Link to={'/dashboard/myhistory'}>My history</Link></li>
                    {admin && <li><Link to={'/dashboard/users'}>All users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
