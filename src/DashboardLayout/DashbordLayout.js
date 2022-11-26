import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashbordLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>

                        <li><Link to='/dashboard/allSeller'>All Seller</Link></li>

                        <li><Link to='/dashboard/allBayer'>All Bayer</Link></li>

                        {/* {
                        isAdmin && <>
                            <li><Link to='/dashboard/adddoctor'>Add a doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                        </>
                    } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;