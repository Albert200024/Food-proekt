import React from 'react'
import style from "../styles/footer.module.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className={style.footer}>
       <div className={style.footerInfo}>
            <div className={style.footerIqon}>
                 <InstagramIcon/>
                 <FacebookIcon/>
                 <TwitterIcon/>
                 <LinkedInIcon/>
            </div>
             <p> &copy; 2022 albertpizza.com</p>
       </div>
    </div>
  )
}
