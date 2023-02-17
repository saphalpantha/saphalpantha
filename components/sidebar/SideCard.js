import React from 'react'

import classes from './SideCard.module.css'

const SideCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default SideCard