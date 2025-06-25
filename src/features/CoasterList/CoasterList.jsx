import Coaster from "./Coaster";
    function CoasterList({
      coasterList,
      isLoading,
      currentPage,
      totalPages,
      setSearchParams,
      handlePreviousPage,
      handleNextPage,
      paginatedCoasterList,
     }) 
      
        { return (
          <ul>
            {coasterList.map((coaster) => {
                  console.log(coaster);
                  return (
                      <Coaster coaster={coaster} />
                  )
                }
            )}
          </ul>

        );
      }
    

export default CoasterList;