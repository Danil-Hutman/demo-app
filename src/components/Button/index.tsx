import React from "react";
import styles from "./index.module.css";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stopPropagation?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  stopPropagation = true,
}) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (stopPropagation) e.stopPropagation();
      onClick?.(e);
    },
    [onClick, stopPropagation]
  );

  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
