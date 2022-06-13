import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
import LeftBar from "../src/Presenters/LeftBar/LeftBar";
import RightBar from "../src/Presenters/RightBar/RightBar";
import Main from "../src/Presenters/Main/Main";
import BottomBar from "../src/Presenters/BottomBar/BottomBar";
export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Rohit Jain | Home</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  );
}
