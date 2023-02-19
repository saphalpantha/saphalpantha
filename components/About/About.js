import classes from './About.module.css'
import ItemSkill from './ItemSkill'
import TerminalIcon from '@mui/icons-material/Terminal' 
import WebIcon from '@mui/icons-material/Web';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {motion as m } from "framer-motion"

const maintext = "My name is Saphal Pantha from Nepal . I am WebDeveloper, Designer and a Editor. I just love designing and testing something new.I am currently pursuing in Kalinga Institute of Industrial Tech(KIIT) " 
const sub = "I have a very good experience in web development. I am the lover of tech who likes to learn about new technology.Currently, I know few programming languages like C,C++ Python, Javascript etc and some of styling and Markup languages like CSS, Scss/Sass and HTML My Method  of Working and Designing  is mostly by example, so I usually start by real world problems then I show how it actually works in a real life."
const AboutData = {
  main:maintext,
  sub:sub,
  wid:[
    {id:'i1', title:"Web Dev", icon : <WebIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/> , para:"Building websites and web applications that meet client requirements and provide a seamless user experience."},
    {id:'i2', title:"Competative Programming", icon : <TerminalIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:" Developing algorithms and solving problems efficiently to improve coding skills and demonstrate expertise."},
    {id:'i3', title:"Video Editing", icon : <CameraEnhanceIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:" Creating visually appealing and engaging videos for various platforms and audiences by combining footage, sound, and special effects."},
    {id:'i4', title:"UI Editor", icon : <PhoneIphoneIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:"Designing and creating visually appealing user interfaces for web and mobile applications, ensuring that they are user-friendly and easy to navigate."},
  ],
  test:[
    {id:'i1', title:"Full Stack D", icon : <ArrowRightIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:"Stunning and functional website. Valuable insights and suggestions provided."},
    {id:'i2', title:"Optimal Coder", icon : <ArrowRightIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:"Efficient and optimal coding. Unmatched problem-solving skills. Highly recommended for competitive programming."},
    {id:'i3', title:"Best Editor", icon : <ArrowRightIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:"Impressive video editing skills. Quick turnaround time. Elevated final product with creative touches."},
    {id:'i4', title:"Simple/Clean Designer", icon : <ArrowRightIcon style={{fill:'#f7c86f', width:'3.5rem' , height:'3.5rem'}}/>, para:"Stunning UI design. Ability to understand and execute vision. Highly recommended for UI design projects."},
  ],
  clients:[
    // {id:'i1', title:"item post", icon : "$", para:"The most modern and high-quality design made at a professional level. "},
    // {id:'i2', title:"item post", icon : "$", para:"The most modern and high-quality design made at a professional level. "},
    // {id:'i3', title:"item post", icon : "$", para:"The most modern and high-quality design made at a professional level. "},
    // {id:'i4', title:"item post", icon : "$", para:"The most modern and high-quality design made at a professional level. "},

  ],
}

const AboutPage = () => {
  
  return (
  <m.div className={classes.about} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75,ease:'easeOut'}}>
        <header className={classes.heading}>
            <span className={classes.hiii}>
                <h3>About Me</h3>
            </span>
        </header>
        <div className={classes.aboutflex}>
          <section className={classes.description}>
            <p style={{margin:'3rem auto'}}> 
            {AboutData.main}
            
          </p>
          <p>{AboutData.sub}</p>
          </section>
        <section className={classes.works}>
                <span className={classes.hiii}>What I am doing</span>
            <div className={classes.worksitems}>
              {AboutData.wid.map(item => {
                return(
                  <ItemSkill key={item.id} title={item.title} para={item.para} img={item.icon} />
                  )
              })}

            </div>
              <span className={classes.hiii}>Testimonials</span>   
        </section>
        
          <section className={classes.testimonials}>
            <div className={classes.testiitems}>    
            {AboutData.test.map(item => {
              return(
                <ItemSkill key={item.id} title={item.title} para={item.para} img={item.icon} />
                )
              })}  
            </div>
          </section>
   
          <section className={classes.testimonials}>
              <span className={classes.hiii}>Clients</span>   
            <div className={`${classes.testiitems} ${classes.clientsitems}`}>
            {AboutData.clients.length > 0 ? AboutData.clients.map(item => {
              return(
                <ItemSkill key={item.id} title={item.title} para={item.para} img={item.icon} />
                )
              }) : <h1>No ClientS Yet</h1>}
            </div>
          </section>

        </div>
    </m.div>
  )
}

export default AboutPage