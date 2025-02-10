import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import ContractPage from '../pages/ContractPage';
import ErorPage from '../components/ErorPage';
import Login from '../authentication/Login';
import SignUp from '../authentication/SignUp';


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement:<ErorPage></ErorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/contract-us',
                    element:<ContractPage></ContractPage>
                },
                {
                    path:'/our-menu',
                    element:<OurMenu></OurMenu>
                },
                {
                    path:'/our-shop',
                    element:<OurShop></OurShop>
                }
            ]
            
        },
        {path:'/login',element:<Login></Login>},
        {path:'/sign-up',element:<SignUp></SignUp>}
    ]);



export default router;