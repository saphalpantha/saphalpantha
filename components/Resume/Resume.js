

import React from 'react'
import EduCard from './EduCard'
import classes from './Resume.module.css'
import SkillCard from './SkillCard'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ExplicitRoundedIcon from '@mui/icons-material/ExplicitRounded';
import {motion as m } from 'framer-motion'
import EduLists from './EduLists';
import ExpLists from './ExpLists';
const Resume = () => {
  return (
    <m.div  className={classes.resume} initial={{opacity:0}} animate={{opacity:1} } transition={{duration:0.75,ease:'easeOut'}}>
        <header className={classes.heading}>
            <span>
                <h3>Resume</h3>
            </span>
        </header>

        <div className={classes.resumeflex}>
            <section className={classes.edu}>
                <div className={classes.logo}>
                <div><MenuBookOutlinedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>

                </div>
                <div className={classes.content}> 
                    <div><h1>Education</h1></div>
                    <EduLists/>
                </div>
            </section>


            <section className={classes.experience}>
                <div className={classes.logo}>
                <div><ExplicitRoundedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>
                </div>
                <div className={classes.content}> 
                    <div><h1>Experience</h1></div>
                        <ExpLists/>
                </div>
            </section>


            
            <section className={classes.skills}>
                <h1 style={{marginLeft:'2rem'}}>My skills</h1>
                <SkillCard/>
            </section>

        </div>
        <div className={classes.hyper}>
            
        </div>
</m.div>
  )
}

export default Resume


