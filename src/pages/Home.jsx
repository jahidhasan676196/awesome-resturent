import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import Slider from '../components/Slider';

// import Introduction from '../components/Introduction';
import Bistro from '../components/Bistro';
import Menu from '../components/Menu';
import Contract from '../components/Contract';
import Parallax from '../components/Parallax';
import Review from '../components/Review';
import Recomanded from '../components/Recomanded';
import app from '../../firebase.config';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    // console.log('firebse ', app._options
    // );
    return (
        <div>
            <Helmet>
                <title>Bisto boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <Bistro></Bistro>
            <Menu></Menu>
            <Contract></Contract>
            <Recomanded></Recomanded>
            <Parallax></Parallax>
            <Review></Review>
        </div>
    );
};

export default Home;