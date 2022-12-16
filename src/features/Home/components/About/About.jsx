import React from "react";

import styles from "./About.module.css";
import Button from "../../../../UI/atoms/Button/Button";
import image from "./images/main.jpg";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Perfect plants for your interiors</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className={styles.button}>Show collection</Button>
      </div>
      <img src={image} alt="plants" className={styles.img} />
    </div>
  );
};

export default About;
