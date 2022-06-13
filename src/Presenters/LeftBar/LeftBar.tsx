import React from 'react'
import {
    LinkedinOutlined,
    InstagramOutlined,
    GithubOutlined,
  } from "@ant-design/icons";

import styles from './LeftBar.module.css';
import Link from '../../../node_modules/next/link';
import { useRouter } from '../../../node_modules/next/router';

export default function LeftBar() {
    const router = useRouter()
  return (
    <div className={styles.left}>
    <div onClick={()=>router.push('/')} className={router.pathname=="/" ?styles.logo_active:styles.logo}>RJ.</div>
    <div className={styles.social}>
      <div className={styles.line}></div>
      <Link href="https://www.linkedin.com/in/rohitjain0301/">
        <LinkedinOutlined className={styles.icon} />
      </Link>
      <Link href="https://github.com/Rohit0301">
        <GithubOutlined className={styles.icon} />
      </Link>
      <Link href="https://www.instagram.com/rohitjain0301/">
        <InstagramOutlined className={styles.icon} />
      </Link>
      <Link href="">
       <img className={styles.img} src="https://play-lh.googleusercontent.com/-9azrA7GgyNpNVfHRI5xLhRyy4OuqevecUAjUFFfpJccTGHkdd4oXYfw11Z5-jxlDRM"/>
      </Link>
      <Link href="">
        <img className={styles.img} style={{width:"1.2rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/141px-LeetCode_logo_white_no_text.svg.png?20200120234911"></img>
      </Link>
      <div className={styles.line}></div>
    </div>
  </div>
  )
}
