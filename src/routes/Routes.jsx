import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import ContractPage from '../pages/ContractPage';
import ErorPage from '../components/ErorPage';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/authentication/Login';
import SignUp from '../pages/authentication/SignUp';
import DashBoardLayout from '../layout/DashBoardLayout';
import UserHome from '../pages/dashboard/UserHome'
import PrementHistory from '../pages/dashboard/PrementHistory';
import MyCard from '../pages/dashboard/MyCard';
import AddReview from '../pages/dashboard/AddReview';
import Mybooking from '../pages/dashboard/Mybooking';
import AdminDashBoard from '../layout/AdminDashBoard';
import ADHome from '../pages/adminDashBoard/ADHome';
import ADAddItem from '../pages/adminDashBoard/ADAddItem';
import ADManageItem from '../pages/adminDashBoard/ADManageItem';
import ADBooking from '../pages/adminDashBoard/ADBooking';
import ADallUser from '../pages/adminDashBoard/ADallUser';
import AdminRoutes from './AdminRoutes';
import AdminMenuUpdate from '../pages/dashboard/AdminMenuUpdate';
import Payment from '../pages/dashboard/Payment'


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
                    element:<PrivateRoute><OurShop></OurShop></PrivateRoute>
                }
            ]
            
        },
        {path:'/login',element:<Login></Login>},
        {path:'/sign-up',element:<SignUp></SignUp>},
        {
            path:'dashboard',
            element:<DashBoardLayout></DashBoardLayout>,
            children:[
                // user dashbroad
                {
                    path:'userHome',
                    element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
                },
                {
                    path:'mycard/payment',
                    element:<PrivateRoute><Payment></Payment></PrivateRoute>
                },
                {
                    path:'prementHistory',
                    element:<PrivateRoute><PrementHistory></PrementHistory></PrivateRoute>
                },
                {
                    path:'mycard',
                    element:<PrivateRoute><MyCard></MyCard></PrivateRoute>
                },
                {
                    path:'addReview',
                    element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
                },
                {
                    path:'myBooking',
                    element:<PrivateRoute><Mybooking></Mybooking></PrivateRoute>
                },
                // admin dashborad

                {
                    path:'adminHome',
                    element:<AdminRoutes><ADHome></ADHome></AdminRoutes>
                },
                {
                    path:'addItem',
                    element:<AdminRoutes><ADAddItem></ADAddItem></AdminRoutes>
                },
                {
                    path:'manageItem',
                    element:<AdminRoutes><ADManageItem></ADManageItem></AdminRoutes>
                },
                {
                    path:'manageBooking',
                    element:<AdminRoutes><ADBooking></ADBooking></AdminRoutes>
                },
                
                {
                    path:'allUser',
                    element:<AdminRoutes><ADallUser></ADallUser></AdminRoutes>
                },
                {
                    path:'manageItem/updateElements/:id',
                    element:<AdminRoutes><AdminMenuUpdate></AdminMenuUpdate></AdminRoutes>
                }
            ]
        },
    ]);



export default router;