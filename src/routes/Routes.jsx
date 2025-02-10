import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/our-menu',
                    element:<OurMenu></OurMenu>
                }
            ]
        },
    ]);



export default router;