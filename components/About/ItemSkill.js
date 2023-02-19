import React from 'react'
import {motion as m} from 'framer-motion'
import classes from './ItemSkill.module.css'

const ItemSkill = (props) => {
  const {img, title, para} = props;
  return (
    <div className={classes.card}>
        <div className={classes.cardicon}>
          <span style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}} >
            {img}
          </span>
          </div>
        <div className={classes.carditems}>
            <h2>{title}</h2>
            <span>{para}</span>
        </div>
    </div>
  )
}

export default ItemSkill