import { Navigate, useLocation } from "react-router-dom";
import useProviderContext from "../hooks/useProviderContext";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user}=useProviderContext()
    console.log(location);
    if(user){
        return children
    }
   return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;