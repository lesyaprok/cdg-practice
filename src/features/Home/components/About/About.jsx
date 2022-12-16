import React from "react";

import styles from "./About.module.css";
import Button from "../../../../UI/atoms/Button/Button";
import image from "./images/main.jpg";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={`dark:text-rose-100 ${styles.title}`}>
          Perfect plants for your interiors
        </h1>
        <p className={`dark:text-white ${styles.subtitle}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          className={`dark:bg-rose-100 dark:text-dark-grey dark:hover:border-2 dark:hover:border-white dark:hover:text-white ${styles.button}`}
        >
          Show collection
        </Button>
      </div>
      <img src={image} alt="plants" className={styles.img} />
    </div>
  );
};

export default About;
