import Container from "../components/Home/Home"
import AboutPage from "../components/About/About"
import Head from "next/head"
const About = () => {
  return (
    <Container>
            <Head>
        <title>About Me</title>
        <meta name="description" content="About me"></meta>
    </Head>
        <AboutPage/>
    </Container>
  )
}

export default About