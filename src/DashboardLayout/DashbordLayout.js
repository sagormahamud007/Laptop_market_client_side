import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import UseAdmin from '../CustomHooks/UseAdmin';
import UseSeller from '../CustomHooks/UseSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext)
    // const [admin] = UseAdmin(user?.email)
    // const { seller } = UseSeller(user?.email)
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

                        <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                        <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                        <li><Link to='/dashboard/allBayer'>All Bayer</Link></li>
                        {/* {
                            seller && <>
                                
                            </>
                        } */}


                        {/* {
                            admin && <>
                               
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;