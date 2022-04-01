import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "../styles/header.module.css"

import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import logo from './logo.png'

export default function HiderItem() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className={style.header}>
       <img  src={logo} alt='logo' className={style.logo1}/>
       <div className={style.headerLogo}>
          <img  src={logo} alt='logo'  style={toggle ? {display:"block"} : {display:"none"}}/>
       </div>
       <ul className={style.menuItem} >
           <Link className={style.link} to="/">Home</Link>
           <Link className={style.link} to="/menu">Menu</Link>
           <Link className={style.link}  to="/about">About</Link>
           <Link className={style.link}  to="/contact">Contact</Link>
       </ul>
       <div className={style.hideMenuItem}>
           <div style={toggle ? {display:"none"} : {display:"block"}}>
               <ul>
                  <Link style={{color:"white", textDecoration:"none", marginLeft:-62}} to="/">Home</Link>
                   <Link style={{color:"white", textDecoration:"none", marginLeft:25}} to="/menu">Menu</Link>
                   <Link style={{color:"white", textDecoration:"none",  marginLeft:25}} to="/about">About</Link>
                   <Link style={{color:"white", textDecoration:"none",  marginLeft:25}} to="/contact">Contact</Link>
               </ul>
           </div>
       </div>
       
       <div className={style.btnBlock}> 
          <DensitySmallIcon onClick={() => setToggle(!toggle)} className={style.headerItemBtn} style={{fontSize:40}}>List</DensitySmallIcon>
       </div>
    </div>
  )
}
