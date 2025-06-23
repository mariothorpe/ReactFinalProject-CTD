import Coaster from "./Coaster";
    function CoasterList({ coasterList }) {
        // const filteredCoasterList = coasterList.filter(
        //     (coaster) =>
        //     )
        
        
        return (
          <ul>
            {coasterList.map((coaster) => {
                  console.log(coaster);
                  return (
                      <Coaster coaster={coaster} />
                  );
              }
            //   <Coaster key={coaster.id} coaster={coaster} />
            )}
          </ul>
        );
      }
    

export default CoasterList;