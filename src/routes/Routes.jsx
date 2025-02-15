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
            path:'dashbord',
            element:<DashBoardLayout></DashBoardLayout>,
            children:[
                {
                    path:'dashbord',
                    element:<UserHome></UserHome>
                },
                {
                    path:'dashbord/reservation',
                    element:<Reservation></Reservation>
                },
                {
                    path:'dashbord/prementHistory',
                    element:<PrementHistory></PrementHistory>
                },
                {
                    path:'dashbord/mycard',
                    element:<MyCard></MyCard>
                },
                {
                    path:'dashbord/addReview',
                    element:<AddReview></AddReview>
                },
                {
                    path:'dashbord/myBokking',
                    element:<Mybooking></Mybooking>
                },
            ]
        },
        {
            path:'adminDashbord',
            element:<AdminDashBoard></AdminDashBoard>,
            children:[
                {
                    path:'adminDashbord',
                    element:<ADHome></ADHome>
                },
                {
                    path:'adminDashbord/addItem',
                    element:<ADAddItem></ADAddItem>
                },
                {
                    path:'adminDashbord/manageItem',
                    element:<ADManageItem></ADManageItem>
                },
                {
                    path:'adminDashbord/manageBooking',
                    element:<ADBooking></ADBooking>
                },
                
                {
                    path:'adminDashbord/allUser',
                    element:<ADallUser></ADallUser>
                },
            ]
        },
    ]);



export default router;