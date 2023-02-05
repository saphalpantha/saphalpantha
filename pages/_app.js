import { Fragment } from 'react'
import '../styles/globals.css'
import SideBar from '../components/sidebar/SideBar'

export default function App({ Component, pageProps }) {
  return  <Component {...pageProps} />
}
