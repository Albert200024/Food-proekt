import React from 'react'
import style from "../styles/menu.module.css"
import MenuItem from './MenuItem'
import { menuData } from '../MenuData/date'

export default function Menu() {
  return (
    <div className={style.menu}>
      <div className={style.menuTittle}>
            <h1 className={style.tittle}>Our Menu</h1>
            <div className={style.meuList}>
                {menuData.map((menuItme, index) => (
                   <MenuItem 
                        key = {index}
                        image = {menuItme.image}
                        tittle = {menuItme.tittle}
                        price = {menuItme.price}/>
                    ))
                  }
            </div>
      </div>
    </div>
  )
}
