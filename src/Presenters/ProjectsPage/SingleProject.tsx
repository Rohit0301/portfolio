import React from "react";
import styles from "./ProjectsPage.module.css";
import { Button, Tag, Col, Divider, Row } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function SingleProject(props: any) {
  const { data } = props;
  const GenerateColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className={styles.left} span={14}>
        <img
          className={styles.img}
          src={data.image}/>
      
        <div className={styles.left_div}>
          <div className={styles.name}>{data.name}</div>
          <div>
            <Link href={data.github}>
              <GithubOutlined className={styles.btn} />
            </Link>
            <Link href={data.url}>
              <LinkOutlined className={styles.btn} />
            </Link>
          </div>
        </div>
        <div className={styles.tech}>
          {data.tech_stack.map((item: any, index: any) => (
            <Tag key={index} color={GenerateColor()}>
              {item}
            </Tag>
          ))}
        </div>
      </Col>
      <Col className={styles.right} span={10}>
        <div className={styles.desc}>
          <ul>
            {data.description.map((item: any, index: any) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
}
