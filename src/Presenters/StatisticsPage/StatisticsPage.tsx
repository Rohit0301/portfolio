import React from "react";
import PageHead from "../Common/PageHead";
import styles from "./StatisticsPage.module.css";
import { Scrollbars } from 'react-custom-scrollbars';
export default function StatisticsPage() {
  return (
    <>
      <PageHead text="STATISTICS" />
      <div className={styles.stats}>
      <Scrollbars
      style={{width:"100%",marginBottom:"8rem"}}
            universal
            >
      <img
        style={{width:"22rem",height:"10rem"}}
        src="https://github-readme-stats.vercel.app/api?username=Rohit0301&count_private=true&show_icons=true&theme=radical&&include_all_commits=true"
      />

      <img
        style={{width:"22rem",height:"10rem"}}
        src="https://github-readme-streak-stats.herokuapp.com/?user=Rohit0301&theme=radical"
      />

      <img
       style={{width:"22rem",height:"10rem"}}
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Rohit0301&theme=dracula"
      />
      </Scrollbars>
      </div>
    </>
  );
}
