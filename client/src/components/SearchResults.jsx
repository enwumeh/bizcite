import React, { useContext } from "react";
import { OilsContext } from "../context/OilsContext";


const SearchResults = (props) => {

  const { oils, setOils } = useContext(OilsContext);


  return (
    <div>
      {/* <h1>See Latest Blog articles here Smell Luxurious for Less</h1>
      <div>
        <div id="blog1">
          <div>How to choose am </div>
          <button>read more</button>
        </div>
        <div id="blog2">
        <h1>How to apply am  </h1>
          <button>read more</button>
        </div>
      </div> */}
    </div>
  );
};
export default SearchResults;