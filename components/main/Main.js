import React from 'react'
import Navigation from './header/Navigation'
import classes from './Main.module.css'
export const Main = (props) => {
  return (
    <div className={classes.main}>
        <Navigation/>
        {props.children}
    </div>
  )
}
