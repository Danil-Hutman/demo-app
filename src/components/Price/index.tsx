import React from "react";
import styles from "./index.module.css";

type PriceProps = {
  price: number;
};

const Price: React.FC<PriceProps> = ({ price }) => (
  <span className={styles.price}>{Math.ceil(price)} $</span>
);

export default Price;
