import React from 'react'
import PageHead from '../Common/PageHead'
import { Carousel } from 'antd';
import styles from './ProjectsPage.module.css';
import SingleProject from './SingleProject';
export default function ProjectsPage() {
  const data = [
    {
      name:"TradeIn",
      image:"images/tradein.svg",
      github:"https://github.com/TradeIn3",
      url:"https://tradein-frontend.netlify.app/",
      tech_stack:["React.js", "Redux", "Django", "PostgreSql", "SCSS", "MaterialUI", "Cloudinary"],
      description:["Developed a web application where users can buy/sell, donate and exchange their second-hand products.",
      "Integrated Razorpay payment gateway for online payment.",
       "Implemented JWT token authentication for user login system in Django."],
    },
    {
      name:"Sudoku Solver",
      image:"images/sudoku.svg",
      github:"https://github.com/Rohit0301/SudokuSolver",
      url:"https://sudoku-application.herokuapp.com/",
      tech_stack:["React.js", "Django", "MaterialUI"],
      description:["It is a web application which can solve sudoku problems using a backtracking algorithm",
      "It validates and also generates Sudoku problems with different difficulty levels."],
    }
  ]
  return (
    <>
        <PageHead text="PROJECTS"/>
        <div className={styles.project}>
          <Carousel autoplay effect='fade'>
            {data.map((singleData,index)=><SingleProject key={index} data={singleData}/>)}
          </Carousel>
        </div>
    </>
  )
}
