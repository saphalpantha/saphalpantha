import React from 'react'
import classes from './EduCard.module.css'
const EduCard = (props) => {
  return (
    <div className={classes.card}>
        <div>
        <h3>University school of the arts</h3>
        </div>
        <div>
        <span>2007-2008</span>
        </div>
        <p>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur. </p>
    </div>
  )
}

export default EduCard