import React, { Fragment } from 'react'
import Image from 'next/image'
import classes from './BlogCard.module.css'
import Card from './Card'
import Link from 'next/link'
const BlogCardContain = (props) => {
    return (
    <Fragment>
    {props.vlogs.map(vlog => {
        const imgPath = `/images/${vlog.img}`
        return(
<Link href={`blog/${vlog.title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src={imgPath} width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>{vlog.vlog_type}</span>
                <span>{vlog.date}</span>
            </div>
                <h2>{vlog.title}</h2>
                <p style={{maxHeight:'2rem', overflow:'hidden'}}>{vlog.desc} </p>
        </div>
    </Card>
    </Link>
        )
    })}

    </Fragment>
  )
}

export default BlogCardContain