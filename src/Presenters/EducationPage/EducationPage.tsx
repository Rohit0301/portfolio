import React from 'react'
import PageHead from '../Common/PageHead'
import EducationCard from './EducationCard';
import styles from './EducationPage.module.css';
export default function EducationPage() {
  const data = [
    {
      logo:"https://content3.jdmagicbox.com/comp/bhopal/v2/0755px755.x755.170922152241.n9v2/catalogue/oriental-college-of-management-bhopal-colleges-gb3oxostn0-250.jpg",
      name:"Oriental Institute of Science and Technology, Bhopal",
      degree:"Bacholar of Technology (B.Tech)",
      specialization:"Computer Science Engineering (CSE)",
      marks:"Gpa: 8.5"
    },
    {
      logo:"https://3.bp.blogspot.com/-hRJib5qHmkI/UzFdLRk79rI/AAAAAAAABto/eKH3Uq_eMCU/s1600/kvs-logo-colour.jpg",
      name:"Kendriya Vidyalaya Nepanagar",
      degree:"Higher Secondary (12th)",
      specialization:"PCM",
      marks:"Percentage: 91.4"
    }
  ]
  return (
    <>
        <PageHead text="EDUCATION"/>
        <div className={styles.edu}>
          {data.map((singleData,index)=>
            <EducationCard key={index} data={singleData}/>
          )}
        </div>
    </>
  )
}
