import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';


const Navbar = () => {
    return(
<nav className={c.nav}>
      <div className={c.item}>
       <NavLink to='/profile'> Profile</NavLink> 
      </div>
      <div className={c.item}>
       <NavLink to='/dialogs'> Messages</NavLink> 
      </div>
      <div className={c.item}>
       <NavLink>News</NavLink> 
      </div>
      <div className={c.item}>
       <NavLink> Music</NavLink> 
      </div>
      <div className={c.item}>
       <NavLink> Settings</NavLink> 
      </div>
      </nav>    )
    
}

export default Navbar