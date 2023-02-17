import React, { useState } from 'react'
import { Main } from '../main/Main'
import SideBar from '../sidebar/SideBar'
import classes from './Home.module.css';
import styles from '../../styles/Home.module.css'
const Container = (props) => {
  // const [isOpen , setIsOpen] = useState(true);
  // const sidebarCloseHandler = () => {
  //   setIsOpen((toggle) => !toggle)
  // }



  return (
    <div className={`${classes.home}` }>
      {/* <h1 onClick={sidebarCloseHandler} className= {`${classes.toggle} ${isOpen  ? classes.open: classes.close}`}>{isOpen ? 'Close' : 'Open'}</h1> */}
        {/* {isOpen && <SideBar/>} */}
        <SideBar/>
        <Main>
          {props.children}
        </Main>


    </div>
  )
}

export default Container