import React from 'react'

import classes from './ItemSkill.module.css'

const ItemSkill = () => {
  return (
    <div className={classes.card}>
        <div className={classes.cardicon}><h1>$</h1></div>
        <div className={classes.carditems}>
            <h2>Item Post</h2>
            <span>The most modern and high-quality design made at a professional level. </span>
        </div>
    </div>
  )
}

export default ItemSkill