import React, { useEffect, useState } from 'react';

const useMenu = () => {
     const [menus,setMenus]=useState([])
        useEffect(()=>{
            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
            
                setMenus(data)
            })
        },[])

        return [menus]
};

export default useMenu;