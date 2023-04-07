import { width } from '@mui/system'
import React from 'react'
import classes from './SkillCard.module.css'
const SkillCard = () => {

    
    const skillData = [
        {id:'v1', title:'web design', val:80},
        {id:'v2', title:'Graphic Design', val:50},
        {id:'v3', title:'Brandings', val:20},
        {id:'v4', title:'Wordpress', val:40},
        {id:'v5', title:'Web Frontend', val:95},
        {id:'v6', title:'Web Backend', val:90},
    ]

  return (
    <div className={classes.card}>
       {skillData.map((item) => {
        return(
            <div className={classes.cardcontent} key={item.id}>
            <div className={classes.cardhead}>
                <h3>{item.title}</h3>
                <span>{`${item.val}%`}</span>
            </div>
            <div className={classes.cardbar}>
                <div className={classes.cardbarfill} style={{width:item.val+'%'}} ></div>
            </div>
        </div>
        )
       })}
       
    </div>
  )
}

export default SkillCard