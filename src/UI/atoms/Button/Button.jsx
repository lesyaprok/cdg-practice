import React from "react";
import styles from "./Button.module.css";

const Button = ({ className = "", children }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
