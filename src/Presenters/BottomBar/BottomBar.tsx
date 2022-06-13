import React from 'react'
import {
    GooglePlusOutlined,
    HeartFilled,
    PhoneOutlined,
    LinkOutlined,
  } from "@ant-design/icons";
  import styles from './BottomBar.module.css';
export default function BottomBar() {
  return (
    <div className={styles.bottom}>
    <a
      href="mailto: rohit.jain.developer@gmail.com"
      className={styles.mail}
    >
     <GooglePlusOutlined className={styles.bottom_icon}/> rohit.jain.developer@gmail.com
    </a>
    <div className={styles.smalldot}></div>
    <a href="tel:+919479609031" className={styles.mail}>
    <PhoneOutlined style={{transform:"rotate(102deg"}} className={styles.bottom_icon}/>
      9479609031
    </a>
  </div>
  )
}
