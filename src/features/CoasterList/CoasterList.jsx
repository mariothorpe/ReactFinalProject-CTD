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
  return (
    <div className={styles.coasterContainer}>
      {coasterList.map((coaster) => {
        console.log(coaster);
        return (
          <CoasterCard
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
