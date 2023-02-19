import { Fragment } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import SideBar from '../components/sidebar/SideBar'
// import icon from '../public/images/icon.ico'
export default function App({ Component, pageProps }) {
  return <Fragment>
          <Head>
            <meta name="viewport" content="initial-scale=1.0 width=device-width"/>
            <link rel="icon" href="/images/icon.ico" type="image/x-icon"></link>
        <title>Saphal Pantha</title>
        <meta name="description" content="Functional Portfolio page of author saphal pantha"></meta>
    </Head>
   <Component {...pageProps} />
  </Fragment>
}
