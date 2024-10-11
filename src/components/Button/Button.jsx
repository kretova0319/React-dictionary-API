import React from "react";
import styles from "./button.module.css";

export default function Button({ text, color }) {
  return (
    <button className={`${styles.btnTable} ${styles[color]}`}>{text}</button>
  );
}
