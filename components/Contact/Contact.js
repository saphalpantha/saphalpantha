import React from 'react'
import classes from './Contact.module.css'
import Form from './Form'
import MapView from './MapView'


const Contact = () => {
  return (
    <div className={classes.contactflex}>
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
    </div>
  )
}

export default Contact