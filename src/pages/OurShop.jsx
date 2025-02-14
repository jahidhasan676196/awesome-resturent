import React from 'react';
import shopImg from '../assets/shop/banner2.jpg'
import ShopMenu from '../components/ShopMenu';
import Cover from '../sharedComponent/Cover';
const OurShop = () => {
    return (
        <div>
            <Cover coverImg={shopImg} title='OUR SHOP' description='Would you like to try a dish?'></Cover>
            <ShopMenu></ShopMenu>
        </div>
    );
};

export default OurShop;