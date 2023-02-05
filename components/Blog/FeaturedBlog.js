import React from 'react'
import BlogCardContain from './BlogCard'
import classes from './FeaturedBlog.module.css'
const FeaturedBlog = (props) => {
  return (
   <div className={classes.blogflex}>
            <header className={classes.heading}>
            <span className={classes.hiii}>
                <h3>Blog</h3>
            </span>
        </header>
        <div className={classes.blogs}>

            <BlogCardContain blogId={props.blogId}/>
        </div>
   </div> 
  )
}

export default FeaturedBlog