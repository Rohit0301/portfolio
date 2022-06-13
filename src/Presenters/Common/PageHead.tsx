import React from 'react'
import styles from './PageHead.module.css'
export default function PageHead(props:any) {
    const {text} = props;
  return (
    <div className={styles.head}>
       {[...text].map((c:any,index:number)=><span key={index}>{c}</span>) }
      </div>
  )
}
