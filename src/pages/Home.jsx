import React from 'react';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Title from '../components/Title';
// import Introduction from '../components/Introduction';
import Bistro from '../components/Bistro';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Bistro></Bistro>
            <Menu></Menu>
        </div>
    );
};

export default Home;