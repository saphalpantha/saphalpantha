import Container from '../../components/Home/Home'
import React from 'react'
import FeaturedBlog from '../../components/Blog/FeaturedBlog'
import { getData } from '../../blog_util'
import Head from 'next/head'

const Blog = (props) => {
  // console.log(props.vlogs);
  return (
    <Container>
            <Head>
        <title>Featured Blogs</title>
        <meta name="description" content="Blogs written by author saphal pantha"></meta>
    </Head>
      <FeaturedBlog vlogs={props.vlogs}/></Container>  
  )
}

export const getStaticProps = () => {
  const blogData = getData();
  return {
    props:{
      vlogs:blogData,
    },
  }
}


export default Blog
