import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useProviderContext = () => {
    const info=useContext(AuthContext)
    return info;
};

export default useProviderContext;