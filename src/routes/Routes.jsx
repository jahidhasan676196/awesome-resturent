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
import Reservation from '../pages/dashboard/Reservation';
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
                    index:true,
                    element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
                },
                {
                    path:'reservation',
                    element:<Reservation></Reservation>
                },
                {
                    path:'prementHistory',
                    element:<PrementHistory></PrementHistory>
                },
                {
                    path:'mycard',
                    element:<MyCard></MyCard>
                },
                {
                    path:'addReview',
                    element:<AddReview></AddReview>
                },
                {
                    path:'myBooking',
                    element:<Mybooking></Mybooking>
                },
                // admin dashborad

                {
                    path:'dashboard',
                    element:<ADHome></ADHome>
                },
                {
                    path:'addItem',
                    element:<ADAddItem></ADAddItem>
                },
                {
                    path:'manageItem',
                    element:<ADManageItem></ADManageItem>
                },
                {
                    path:'manageBooking',
                    element:<ADBooking></ADBooking>
                },
                
                {
                    path:'allUser',
                    element:<ADallUser></ADallUser>
                },
                {
                    path:'manageItem/updateElements/:id',
                    element:<AdminMenuUpdate></AdminMenuUpdate>
                }
            ]
        },
    ]);



export default router;