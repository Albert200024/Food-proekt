import React from 'react'
import style from "../styles/home.module.css"
import homeImage from '../image/homeImage.jpeg'
import {Link } from "react-router-dom"

export default function Home() {
   return (
    <div className={style.home} style={{backgroundImage: `url(${homeImage})`}}>
       <div className={style.homeContainer}>
          <h1>Food Corner</h1>
          <p>IDIAN FOOD AT A CLICK.</p>
           <Link to="/menu">
              <button>Order Now</button>
           </Link>
       </div>
    </div>
  )
}
