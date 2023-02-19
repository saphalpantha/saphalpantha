import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import classes from './Navigation.module.css'
import { useMediaQuery } from 'react-responsive';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {motion as m } from 'framer-motion'
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true);
    const isPhone = useMediaQuery({maxWidth:'769px'})

    
    const navBarClickHandler = () => {
            setIsOpen(prev => !prev) 
    }


        


    

    const navHelper = <nav className={`${classes.nav} ${isOpen ? classes.open : classes.close }}`}> 
    <ul>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/resume">Resume</Link>
        </li>
        {/* <li>
            <Link href="/portfolio">Portfolio</Link>
        </li> */}
        <li>
            <Link href="/blog">Blog</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
    </ul>
    </nav>

    
  return (
      <div className={classes.navigation} >
        <div className={classes.empty}>
        </div>
        {/* <h1>hide</h1> */}
        {/* {(isOpen) ? <div onClick={navBarHandler} style={{width:'30px', height:'50px'  , borderRadius:'10px', margin : '2rem'}}><ArrowCircleDownOutlinedIcon  style={{fill: 'white', width:'100%' , height:'100%' , cursor:'pointer'}}/></div>: navHelper } */}
        {(isPhone ) && <span onClick={navBarClickHandler} className={classes.nav_bar}><ArrowDropDownCircleIcon className={classes.dropdown} /></span>}
        {/* {!isOpen && navHelper} */}

        {(isPhone && !isOpen) && navHelper}
        {(!isPhone) && navHelper}
        
        {/* {console.log(isPhone)} */}
    </div>
  )
}

export default Navigation