import React from 'react';


import useMenu from '../hooks/useMenu';
import MenuSection from '../components/MenuSection';
import banner3 from '../assets/menu/banner3.jpg'
import deserts from '../assets/menu/dessert-bg.jpeg'
import pizza from '../assets/menu/pizza-bg.jpg'
import salad from '../assets/menu/salad-bg.jpg'
import soups from '../assets/menu/soup-bg.jpg'
import Cover from '../sharedComponent/Cover';
import Title from '../sharedComponent/Title';

const OurMenu = () => {
    const [menus]=useMenu()
    const offerdMenu=menus.filter(item=>item.category=== 'offered')
    const desertsMenu=menus.filter(item=>item.category=== 'dessert')
    const pizzaMenu=menus.filter(item=>item.category=== 'pizza')
    const saladMenu=menus.filter(item=>item.category=== 'salad')
    const soupsMenu=menus.filter(item=>item.category=== 'soup')
    return (
        <div>
            <Cover coverImg={banner3} title='OUR MENU' description='Would you like to try a dish?'></Cover>
            <Title subHeading='---Do not miss---' Heading='TODAY IS OFFER'></Title>
            <MenuSection menus={offerdMenu}></MenuSection>
            <Cover coverImg={deserts} title='DESSERTS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuSection menus={desertsMenu}></MenuSection>
            <Cover coverImg={pizza} title='PIZZA' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuSection menus={pizzaMenu}></MenuSection>
            <Cover coverImg={salad} title="SALAD" description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took'></Cover>
            <MenuSection menus={saladMenu}></MenuSection>
            <Cover coverImg={soups} title='SOUPS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took'></Cover>
            <MenuSection menus={soupsMenu}></MenuSection>

        </div>
    );
};

export default OurMenu;