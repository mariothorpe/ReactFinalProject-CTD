import React from 'react';
import styles from './HomePage.module.css';
import CoasterViewForm from '../features/CoasterViewForm';
import CoasterList from '../features/CoasterList/CoasterList';

function HomePage({
  coasterList,
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
  searchField,
  setSearchField,
}) {
  return (
    <div>
      <h1 className={styles.homePageHeading}>Coaster Credit Counter</h1>
      <p className={styles.homePageParagraph}>
        Ride, Search, and Track Your Coaster Credits!
      </p>
      <CoasterViewForm
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortField={sortField}
        setSortField={setSortField}
        queryString={queryString}
        setQueryString={setQueryString}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      <CoasterList coasterList= {coasterList} />
    </div>
  );
}

export default HomePage;