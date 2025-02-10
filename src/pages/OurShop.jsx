import React from 'react';
import Cover from '../components/Cover';
import shopImg from '../assets/shop/banner2.jpg'
import ShopMenu from '../components/ShopMenu';
const OurShop = () => {
    return (
        <div>
            <Cover coverImg={shopImg} title='OUR SHOP' description='Would you like to try a dish?'></Cover>
            <ShopMenu></ShopMenu>
        </div>
    );
};

export default OurShop;