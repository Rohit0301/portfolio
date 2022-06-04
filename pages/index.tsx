import Head from "../node_modules/next/head";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "../node_modules/next/link";
import {LinkedinOutlined,InstagramOutlined,GithubOutlined,GooglePlusOutlined} from '@ant-design/icons'
export default function Home() {
  const particlesInit = async (main: any) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Rohit Jain | Home</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.main}>
            <div className={styles.name}>Rohit Jain</div>
            <div className={styles.dot}></div>
            <div className={styles.designation}>Software Developer</div>
        </div>
        <div className={styles.social}>
          <Link href="https://www.linkedin.com/in/rohitjain0301/"><LinkedinOutlined className={styles.icon}/></Link>
          <Link href="https://www.instagram.com/rohitjain0301/"><InstagramOutlined className={styles.icon}/></Link>
          <Link href="https://github.com/Rohit0301"><GithubOutlined className={styles.icon}/></Link>
          <Link href='mailto: rohit.jain.developer@gmail.com'><GooglePlusOutlined className={styles.icon}/></Link>
        </div>
      </div>

      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "rgb(0, 17, 43)",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  );
}
