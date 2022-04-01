import React from 'react'
import style from "../styles/menu.module.css"

export default function MenuItem({image, tittle, price}) {
  return (
    <div className={style.menuItem}>
        <div style={{backgroundImage:`url(${image})`}}>
             <h1>{tittle}</h1>
             <p>{price}</p>
        </div>
    </div>
  )
}
