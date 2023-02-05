import React from 'react'
import classes from './Sidebar.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
const SideBar = (props) => {
  
  return (
    <div className={classes.sidebar}>
        <div className={classes.heading}>
          <div className={classes.image}>
            <img src="" alt="avatar"/>

          </div>
          <strong><h1>Name</h1></strong>
          <span>Position</span>
          </div>
          <hr></hr>

      {/* // item */}
        <div className={classes.items}>
        <div className={classes.logo}>
          <div><EmailOutlinedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>
          <div><LocalPhoneOutlinedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}} /></div>
          <div><CalendarMonthOutlinedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>
          <div><FmdGoodOutlinedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>
        </div>
        <div className={classes.contains}>
        <div className={classes.contain}>
          <span>Email</span>
          <h3>main@gmail.com</h3> 
        </div>
        
        <div className={classes.contain}>
          <span>PHONE</span>
          <h3>+91 000000000000</h3> 
        </div>

        <div className={classes.contain}>
          <span>BIRTHDAY</span>
          <h3>JAN 10, 2000</h3> 
        </div>

        <div className={classes.contain}>
          <span>Location</span>
          <h3>Sacramento, California, USA</h3> 
        </div>
        </div>
        </div>
        <div className={classes.footer} >
          <div>
          <span><Link href="https://facebook.com"><FacebookOutlinedIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
          <div>
          <span><Link href="https://instagram.com"><InstagramIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
          <div>
          <span><Link href="https://linkenden.com"><LinkedInIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
        </div>
    </div>
  )
}

export default SideBar