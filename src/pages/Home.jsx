import React from 'react';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Title from '../components/Title';
// import Introduction from '../components/Introduction';
import Bistro from '../components/Bistro';
import Menu from '../components/Menu';
import Contract from '../components/Contract';
import Parallax from '../components/Parallax';
import Review from '../components/Review';
import Recomanded from '../components/Recomanded';
import app from '../../firebase.config';

const Home = () => {
    console.log('firebse ', app._options
    );
    return (
        <div>
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