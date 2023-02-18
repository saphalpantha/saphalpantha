import Head from 'next/head'
import HomePage from '../components/Home/Home'
// import { Main } from '../components/main/Main'
import Container from '../components/Home/Home'
export default function Home() {
  return (
   <>   
        <Head>
          <title>home page</title>
        <meta name="description" content="Homepage"></meta>
    </Head>
   <HomePage/>
    </>
  )
}
