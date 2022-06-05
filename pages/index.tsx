import Head from "../node_modules/next/head";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "../node_modules/next/link";
import { Grid } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  HeartFilled,
  PhoneOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Button } from "../node_modules/antd/lib/index";
import { useRouter } from "../node_modules/next/router";
export default function Home() {
  const router = useRouter();
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
        <title>Rohit Jain | Portfolio</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.left}>
        <div className={styles.logo}>RJ.</div>
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
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.top}>
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

        <div className={styles.right}>
          <li className={styles.right_li}>Experience</li>
          <li className={styles.right_li}>Education</li>
          <li className={styles.right_li}>Tech Stack</li>
          <li className={styles.right_li}>Achievement</li>
        </div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000",
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
