import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import UseAdmin from '../CustomHooks/UseAdmin';
import UseSeller from '../CustomHooks/UseSeller';

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    const [admin, adLoading] = UseAdmin(user?.email)
    const [seller, sellerLoading] = UseSeller(user?.email);

    if (loading || adLoading || sellerLoading) {
        <progress className="progress w-56"></progress>
    }

    if (admin && seller) {
        return children;
    }

    return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;

};

export default SellerRouter;