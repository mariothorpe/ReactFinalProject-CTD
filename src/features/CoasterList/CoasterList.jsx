import CoasterCard from "./CoasterCard";
import styles from "./CoasterList.module.css";
function CoasterList({
  coasterList,
  isLoading,
  currentPage,
  totalPages,
  setSearchParams,
  handlePreviousPage,
  handleNextPage,
  paginatedCoasterList,
}) {
  if (isLoading) {
    return <p>Coaster list is loading...</p>;
  }
  return (
    <div className={styles.coasterContainer}>
      {coasterList.map((coaster, index) => {
        return (
          <CoasterCard
            key={index}
            name={coaster.name}
            park={coaster.park}
            type={coaster.type}
            height={coaster.height}
            speed={coaster.speed}
            inversions={coaster.inversions}
            minheightreq={coaster.minheightreq}
          />
        );
      })}
    </div>
  );
}

export default CoasterList;
