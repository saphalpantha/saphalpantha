import React from 'react'
import BlogCardContain from './BlogCard'
import {motion as m } from "framer-motion"
import classes from './FeaturedBlog.module.css'
const FeaturedBlog = (props) => {
  return (
   <m.div className={classes.blogflex} initial={{opacity:0}} animate={{opacity:1} } transition={{duration:0.75,ease:'easeOut'}}>
            <header className={classes.heading}>
            <span className={classes.hiii}>
                <h3>Blog</h3>
            </span>
        </header>
        <div className={classes.blogs}>
            <BlogCardContain blogId={props.vlogs.id} vlogs={props.vlogs}/>
        </div>
   </m.div> 
  )
}

export default FeaturedBlog