import React from 'react'
import classes from './EduCard.module.css'
const EduCard = (props) => {

  
  const {title, date, description, id} = props;
  return (
    <div className={classes.card}>
        <div>
        <div>
        <h3>{title}</h3>
        </div>
        <div>
            <span>{date}</span>
        </div>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default EduCard