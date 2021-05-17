import React, { useEffect, useContext } from "react";
import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import styles from "../styles/scss/oils.scss";

const Oils = (props) => {
  const { oils, setOils } = useContext(OilsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FindOils.get("/");
        setOils(response.data.data.oils);
        console.log("response should be here", oils);
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="oils-main">
      {oils.map(oil => {
        return (
          <div key={oil.id}>
            <div>{oil.id}</div>
            <div>{oil.companytype}</div>
            <div>{oil.name}</div>
            </div>
        )
      }

      )}
    </div>
  );
};

export default Oils;
