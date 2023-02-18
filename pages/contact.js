import Container from '../components/Home/Home'
import React from 'react'
import Contact from '../components/Contact/Contact'
import Head from 'next/head'
const ContactPage = () => {
  return (
    <Container>
            <Head>
        <title>Contact Me</title>
        <meta name="description" content="Viewer can contact me from simple contact form "></meta>
    </Head>
      <Contact/>
    </Container>
  )
}

export default ContactPage