import React from 'react'
import classes from './Contact.module.css'
import Form from './Form'
import MapView from './MapView'

import {motion as m } from 'framer-motion'
const Contact = () => {
  return (
    <m.div  className={classes.contactflex} initial={{opacity:0}} animate={{opacity:1} } transition={{duration:0.85,ease:'easeIn'}}>
        <header className={classes.heading}>
            <span className={classes.hiii}>
                <h3>Contact</h3>
            </span>
        </header>
        <div className={classes.map}>
          <MapView/>
        </div>
        <div className={classes.form}>
          <Form/>
        </div>
    </m.div>
  )
}

export default Contact