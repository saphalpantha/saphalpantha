import { Fragment } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import SideBar from '../components/sidebar/SideBar'
import Script from 'next/script'
// import icon from '../public/images/icon.ico'
export default function App({ Component, pageProps }) {
  return <Fragment>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8789008287651331"
     crossorigin="anonymous"></Script>
          <Head>
            <meta name="viewport" content="initial-scale=1.0 width=device-width"/>
            <link rel="icon" href="/images/icon.ico" type="image/x-icon"></link>
        <title>Saphal Pantha</title>
        <meta name="description" content="Functional Portfolio page of author saphal pantha"></meta>
    </Head>
    
   <Component {...pageProps} />
  </Fragment>
}
