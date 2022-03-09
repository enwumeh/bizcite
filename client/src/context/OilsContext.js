import React, { useState, createContext } from "react";
import FindOils from "../APIs/FindOils";
export const OilsContext = createContext();

export const OilsContextProvider = (props) => {
  const [oils, setOils] = useState([]);

  // the useeffect replaces is lie component did mount beforecomponentdid mount
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await FindOils.get("/oils");
        setOils(response.data.data.oils);
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);

  return (
    <OilsContext.Provider value={{ oils, setOils }}>
      {props.children}
    </OilsContext.Provider>
  );
};

