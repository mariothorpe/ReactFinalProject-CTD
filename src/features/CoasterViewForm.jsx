import React from "react";

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
  function preventRefresh(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={preventRefresh}>
      <div>
        <label>Search By: </label>
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
      </div>

      <div>
        <label>Sort by: </label>
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
