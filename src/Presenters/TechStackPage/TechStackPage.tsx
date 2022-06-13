import React from "react";
import PageHead from "../Common/PageHead";
import styles from "./TechStack.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TECH_STACK, TECH_STACK_NAME } from "../../Constants/Constants";
import  ScrollArea from 'react-scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';
export default function TechStack() {
  return (
    <>
      <PageHead text="Tech Stack" />
      <div className={styles.ts}>
      <Scrollbars
      style={{width:"73%",marginBottom:"8rem"}}
            universal
            >
      
          {TECH_STACK_NAME.map((tech:any,index:any)=>
           <div key={index} className={styles.section}>
           <div className={styles.section_head}>
             {tech.name}
           </div>
           {TECH_STACK[tech.id].map((item:any, index:any) => (
             <div key={index} className={styles.tech}>
               <img
                  alt={item.name}
                 className={styles.tech_img}
                 style={item.style? item.style :null}
                 src={item.img? item.url :`https://cdn.jsdelivr.net/gh/devicons/devicon/icons${item.url}`}
               />
               <div className={styles.tech_name}>{item.name}</div>
             </div>
           ))}
         </div>
          
          )}
         
        </Scrollbars>
      </div>
    </>
  );
}
