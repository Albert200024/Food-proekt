import React from 'react'
import aboutImage from '../image/about.jpeg'
import style from "../styles/about.module.css"

export default function About() {
  return (
    <div className={style.about}>
       <div className={style.aboutTop} style={{backgroundImage:`url(${aboutImage})`}}></div>
       <div className={style.aboutBottom}>
           <div className={style.botomInfo}> 
               <h1>About Us</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit</p>
           </div>
       </div>
    </div>
  )
}
