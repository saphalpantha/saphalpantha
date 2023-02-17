import Container from '../../components/Home/Home'
import React from 'react'
import FeaturedBlog from '../../components/Blog/FeaturedBlog'
import { getData } from '../../blog_util'


const Blog = (props) => {
  console.log(props.vlogs);
  return (
    <Container><FeaturedBlog vlogs={props.vlogs}/></Container>  
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
