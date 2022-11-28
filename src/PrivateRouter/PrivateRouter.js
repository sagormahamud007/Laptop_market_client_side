import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signIn" state={{ from: location }} replace />;

};

export default PrivateRouter;