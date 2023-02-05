

import React from 'react'
import EduCard from './EduCard'
import classes from './Resume.module.css'
import SkillCard from './SkillCard'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ExplicitRoundedIcon from '@mui/icons-material/ExplicitRounded';
const Resume = () => {
  return (
    <div className={classes.resume}>
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
                    <EduCard/>
                    <EduCard/>
                    <EduCard/>
                </div>
            </section>


            <section className={classes.experience}>
                <div className={classes.logo}>
                <div><ExplicitRoundedIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/></div>
                </div>
                <div className={classes.content}> 
                    <div><h1>Experience</h1></div>
                    <EduCard/>
                    <EduCard/>
                    <EduCard/>
                    <EduCard/>
                    <EduCard/>
                </div>
            </section>


            
            <section className={classes.skills}>
                <h1 style={{marginLeft:'2rem'}}>My skills</h1>
                <SkillCard/>
            </section>

        </div>
</div>
  )
}

export default Resume


