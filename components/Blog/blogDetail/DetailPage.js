import React from 'react'
import styles from './DetailPage.module.css'
const DetailPage = ({vlogs}) => {
  // const vlogs = [];
  const title = vlogs[0].title;
  const id = vlogs[0].id;
  const img=vlogs[0].img;
  const vlog_type = vlogs[0].vlog_type;
  const desc = vlogs[0].desc;
  const imgPath = `/images/${img}`
  // {console.log('from',vlogs)}
  return(
    <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{desc}</p>
    <p className={styles.vlogType}>Vlog Type: {vlog_type}</p>
    <img src={imgPath} alt={title} className={styles.image} key={title}/>
  </div>
  )
}


export default DetailPage