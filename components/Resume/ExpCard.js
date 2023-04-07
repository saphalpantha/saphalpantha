import React from 'react'
import classes from './EduCard.module.css'
const ExpCard = (props) => {

  const {title, description} = props;
  return (
    <div className={classes.card}>
        <div>
        <div>
        <h3>{title}</h3>
        </div>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default ExpCard