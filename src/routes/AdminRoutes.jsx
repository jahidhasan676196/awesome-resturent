import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const location=useLocation()
    const [admin]=useAdmin()
    if(admin.role==='admin'){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default AdminRoutes;