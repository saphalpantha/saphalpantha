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
import Image from 'next/image';
import img_src from '../../public/images/mypic.png'
import { useViewportScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';
import {motion as m } from 'framer-motion'
const sidebarData = {
  profile_name:'SAPHAL PANTH',
  profile_img:img_src,
  post:"Developer",
  email:"saphalpantha@gmail.com",
  phone:"+91-8917520084",
  // dob: Date('2004-04-10').toString(),
  dob:'2004-04-10',
  location:"Butwal , Nepal",
  fb:"",
  tweet:"",
  insta:"",
  link:"",
  
}

const SideBar = (props) => {
  // console.log(ScrollYProgess)
  return (
    <m.div className={classes.sidebar_container} style={{
      // scaleX:scale+20
      // top:scale
      
    }}>
    <div className={classes.sidebar}>
        <div className={classes.heading}>
          <Link href='/'>
          <div className={classes.myimg}>
            <Image src={sidebarData.profile_img} width={150} height={150}  key={sidebarData.profile_name}/>
          </div>
          </Link>
          <strong><h1>{sidebarData.profile_name}</h1></strong>
          <span>{sidebarData.post}</span>
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
          <h3>{sidebarData.email}</h3> 
        </div>
        
        <div className={classes.contain}>
          <span>PHONE</span>
          <h3>{sidebarData.phone}</h3> 
        </div>

        <div className={classes.contain}>
          <span>BIRTHDAY</span>
          <h3>{sidebarData.dob}</h3> 
        </div>

        <div className={classes.contain}>
          <span>Location</span>
          <h3>{sidebarData.location}</h3> 
        </div>
        </div>
        </div>
        <div className={classes.footer} >
          <div>
          <span><Link href="https://www.facebook.com/saphal.bhandari.31/"><FacebookOutlinedIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
          <div>
          <span><Link href="https://www.instagram.com/saphal_pantha/"><InstagramIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
          <div>
          <span><Link href="https://linkenden.com/saphalpantha/"><LinkedInIcon style={{color:'#abaaa9'}}/></Link></span>
          </div>
        </div>
    </div>
      </m.div>
  )
}

export default SideBar