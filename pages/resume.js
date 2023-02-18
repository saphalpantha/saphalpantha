import Container from '../components/Home/Home'
import React from 'react'
import Resume from '../components/Resume/Resume'
import Head from 'next/head'

const ResumeProject = () => {
  return (
    <Container>
        <Head>
        <title>MY Resume</title>
        <meta name="description" content="Resume of author"></meta>
    </Head>
      <Resume/></Container>
  )
}

export default ResumeProject