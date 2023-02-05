import React, { Fragment } from 'react'
import Image from 'next/image'
import classes from './BlogCard.module.css'
import Card from './Card'
import Link from 'next/link'
const BlogCardContain = () => {
    const title= 'Design Conferences in  2022';
    return (
    <Fragment>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    <Card className={classes.blogcard}>
        <div className={classes.cardcontain}>
            <div className={classes.img}>
                <Image src="/images/marker.png" width={250} height={250}/>
            </div>
            <div className={classes.date}>
                <span>Design</span>
                <span>Fab 23 ,2022</span>
            </div>
                <h2>{title}</h2>
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </p>
        </div>
    </Card>
    </Link>
    <Link href={`blog/${title}`}>
    </Link>
    </Fragment>
  )
}

export default BlogCardContain