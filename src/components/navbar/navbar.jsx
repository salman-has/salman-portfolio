import React, { useRef, useState } from "react";
import mylogo from '../../assets/mylogo.GIF';
import './navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar=()=>{
    const [menu,setMenu]=useState("home");
    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }

    const handleNavClick=(section)=>{
        setMenu(section);
        closeMenu();
    }
    return(
        <div className="navbar">
             <img src={mylogo} alt=" " width={100} height={100}></img>
             <img src={menu_open} onClick={openMenu} alt="" width={50} height={60} className="nav-open-icon"></img>
             <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" width={40} height={40} className="nav-close-icon" onClick={closeMenu}></img>
                <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>handleNavClick("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#about"><p onClick={()=>handleNavClick("about")}>About</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#services"><p onClick={()=>handleNavClick("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#mywork"><p onClick={()=>handleNavClick("mywork")}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#contact"><p onClick={()=>handleNavClick("contact")}>Contact</p></AnchorLink></li>
             </ul>
             <div className="nav-connect">
                <AnchorLink className="anchor-link"  href="#contact">Connect With Me</AnchorLink>

            </div>
        </div>
    )
}
export default Navbar