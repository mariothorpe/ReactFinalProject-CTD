import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div>
      <h1 className={styles.homePageHeading}>Coaster Credit Counter</h1>
      <p className={styles.homePageParagraph}>
        Ride, Search, and Track Your Coaster Credits!
      </p>
    </div>
  );
}

export default HomePage;