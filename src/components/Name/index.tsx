import React from "react";
import styles from "./index.module.css";

const Name: React.FC<{ name: string }> = ({ name }) => (
  <h2 className={styles.name}>{name}</h2>
);

export default Name;
