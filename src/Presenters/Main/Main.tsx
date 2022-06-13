import React from 'react'
import { Button } from '../../../node_modules/antd/lib/index'
import { useRouter } from '../../../node_modules/next/router'
import styles from './Main.module.css'
import {
    GooglePlusOutlined,
    HeartFilled,
    PhoneOutlined,
    LinkOutlined,
  } from "@ant-design/icons";
export default function Main() {
    const router = useRouter()
  return (
    <div className={styles.body}>
    <div className={styles.body_middle}>
      <div className={styles.iam}>I am</div>
      <div className={styles.main}>
        <div className={styles.name}>Rohit Jain</div>
        <div className={styles.dot}></div>
        <div className={styles.designation}>Software Developer</div>
      </div>

      <div className={styles.country}>
        from <span>INDIA</span>
        <HeartFilled className={styles.heart} />
      </div>
      <Button
        onClick={() =>
          router.push(
            "https://drive.google.com/file/d/1mvXLn0MKx-iQeUE7JerJMcKTXSUL16QO/view?usp=sharing"
          )
        }
        className={styles.resume}
      >
        <LinkOutlined />
        Resume
      </Button>
    </div>
  
  </div>
  )
}
