import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import CheefCard from './CheefCard';
import ShopCard from './ShopCard';

const ShopMenu = () => {
    const [menus] = useMenu()
    const saladMenu = menus.filter(item => item.category === 'salad')
    const pizzaMenu = menus.filter(item => item.category === 'pizza')
    const soupMenu = menus.filter(item => item.category === 'soup')
    const desertsMenu = menus.filter(item => item.category === 'dessert')
    const drinksMenu = menus.filter(item => item.category === 'drinks')
    console.log(saladMenu);
    return (
        <div className='mt-32'>
            <Tabs>
                <TabList className='text-2xl font-medium text-[#151515]'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup </Tab>
                    <Tab>Desserts </Tab>
                    <Tab>Drinks </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {
                            saladMenu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {
                            pizzaMenu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {
                            soupMenu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {
                            desertsMenu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                        {
                            drinksMenu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopMenu;