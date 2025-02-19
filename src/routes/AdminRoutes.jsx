import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import useProviderContext from '../hooks/useProviderContext';

const AdminRoutes = ({children}) => {
    const location=useLocation()
    const [isAdmin,isLoading]=useAdmin()
if(isLoading){
    return <progress className="progress w-56"></progress>
}

    if(isAdmin){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default AdminRoutes;