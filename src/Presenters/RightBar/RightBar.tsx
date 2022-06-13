import React from "react";
import { useRouter } from "../../../node_modules/next/router";
import { NAVIGATIONS } from "../../Constants/Constants";
import styles from "./RightBar.module.css";
export default function RightBar() {
  const router = useRouter();
  return (
    <div className={styles.right}>
      {NAVIGATIONS.map((item: any, index: any) => (
        <li
          key={index}
          onClick={() => router.push(item.route)}
          className={
            router.pathname == item.route
              ? styles.right_li_active
              : styles.right_li
          }
        >
          {item.name}
        </li>
      ))}
    </div>
  );
}
