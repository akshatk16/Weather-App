import React from "react";
import styles from './Footer.module.css';


const Footer = () => {
  return (
      <div className={styles.container}>
		&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/akshatk16" className={styles.github}>  Akshat Kumar Agarwal </a>
      </div>
	);
}

export default Footer;
