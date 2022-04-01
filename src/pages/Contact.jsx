import React from 'react'
import style from "../styles/contact.module.css"
import imageCotact from "../image/contactImage.jpg"

export default function Contact() {
  return (
    <div className={style.contact}>
        <div className={style.leftSide} style={{backgroundImage:`url(${imageCotact})`}}></div>
        <div className={style.rightSide}>
             <h1> Contact Us</h1>
             <form id="contact-form" method="POST">
               <label htmlFor="name">Full Name</label>
               <input name="name" placeholder="Enter full name..." type="text" />
               <label htmlFor="em l">Email</label>
               <input name="email" placeholder="Enter email..." type="email" />
               <label htmlFor="message">Message</label>
               <textarea
                 rows="6"
                 placeholder="Enter message..."
                 name="message"
                 required
              ></textarea>
              <button type="submit"> Send Message</button>
            </form>
        </div>
    </div>
  )
}
