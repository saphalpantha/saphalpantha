import { Fragment } from 'react'
import '../styles/globals.css'
import SideBar from '../components/sidebar/SideBar'

export default function App({ Component, pageProps }) {
  return <Fragment>
          <Head>
            <meta name="viewport" content="initial-scale=1.0 width=device-width"/>
        <title>Saphal Pantha</title>
        <meta name="description" content="Functional Portfolio page of author saphal pantha"></meta>
    </Head>
   <Component {...pageProps} />
  </Fragment>
}
