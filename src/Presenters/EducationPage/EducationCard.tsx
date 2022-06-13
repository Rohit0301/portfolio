import React from 'react'
import styles from './EducationPage.module.css';
export default function EducationCard(props:any) {
    const {data} = props;
  return (
    <div className={styles.card}>
        <div className={styles.left}>
            <img src={data.logo} className={styles.img}></img>
        </div>
        <div className={styles.right}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.deg}>{data.degree}</div>
            <div className={styles.spe}>{data.specialization}</div>
            <div className={styles.gpa}>{data.marks}</div>
        </div>
    </div>
  )
}
