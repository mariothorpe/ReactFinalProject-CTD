import React from "react";
import styles from "./CoasterCard.module.css";

function CoasterCard({
  name,
  park,
  type,
  height,
  speed,
  inversions,
  minheightreq,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.park}>{park}</h3>
        <p className={styles.type}>Type: {type}</p>
        <p className={styles.height}>Height: {height} ft </p>
        <p className={styles.speed}>Speed: {speed} mph </p>
        <p className={styles.inversions}>Inversions: {inversions}</p>
        <p className={styles.heightRequirement}>
          Minimum Height Requirement: {minheightreq} inches
        </p>
      </div>
    </div>
  );
}

export default CoasterCard;
