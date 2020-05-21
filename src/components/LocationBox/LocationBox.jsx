import React from "react";
// import styles from './Footer.module.css';


const LocationBox = () => {
  return (
      <div className={styles.container}>
		<div className={styles.location}>{weather.name}, {weather.sys.country}</div>
		<div className={styles.date}>{dateBuilder(new Date())}</div>
      </div>
	);
}

export default LocationBox;
