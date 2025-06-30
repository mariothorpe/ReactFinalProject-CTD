import React, { useState, useEffect } from 'react';


function CoasterViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
  searchField,
  setSearchField,
}) {

    const [localQueryString, setLocalQueryString] = useState(queryString);

    useEffect(() => {
      const debounce = setTimeout(() => {
        setQueryString(localQueryString);
      }, 500);
  
      return () => {
        clearTimeout(debounce);
      };
    }, [localQueryString, setQueryString]);
  function preventRefresh(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={preventRefresh}>
      <div>
        <label> Search Coasters By: </label>
        <select
          value={searchField}
          onChange={(event) => {
            setSearchField(event.target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="park">Park</option>
          <option value="type">Type</option>
          <option value="height">Height</option>
          <option value="speed">Speed</option>
          <option value="inversions">Inversions</option>
          <option value="minheightreq">Minimum Height Requirement</option>
        </select>
        <input
          type="text"
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
        />
         <button
          type="button"
          onClick={(e) => {
            setQueryString('');
          }}
        >
          Reset
        </button>
      </div>

      <div>
        <label> Sort Coasters By: </label>
        <select
          value={sortField}
          onChange={(event) => {
            setSortField(event.target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="park">Park</option>
          <option value="type">Type</option>
          <option value="height">Height</option>
          <option value="speed">Speed</option>
          <option value="inversions">Inversions</option>
          <option value="minheightreq">Minimum Height Requirement</option>
        </select>

        <label>Direction</label>
        <select
          value={sortDirection}
          onChange={(event) => {
            setSortDirection(event.target.value);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
}

export default CoasterViewForm;
