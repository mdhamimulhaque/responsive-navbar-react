import React, { useState } from 'react';
import "./Navbar1.css";
const navItems = [
    {
        name:"Home",
        cName:"nItem"
    },
    {
        name:"About",
        cName:"nItem"
    },
    {
        name:"Services",
        cName:"nItem"
    },
    {
        name:"Blog",
        cName:"nItem"
    },
    {
        name:"Contact",
        cName:"nItem"
    }
]


const Navbar1 = () => {

    const [clicked,setClicked] = useState(false);

    const handleNavItem = () =>{
        setClicked(!clicked)
    }

    return (
        <>
        <div className="nav-container">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="nav-icon" onClick={handleNavItem}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            <nav>
               <ul className={clicked ? 'menu-items active' : 'menu-items' }>
                   
               {
                 navItems.map(item => {
                    return(
                        <li className={item.cName}>{item.name}</li>
                    )
                 }) 
               }
               </ul>
           </nav> 
        </div>
        </>
    );
};

export default Navbar1;