import React, { useState, createContext } from 'react';
import FindOils from "../APIs/FindOils";
export const OilsContext = createContext();

export const OilsContextProvider = props => {
  const [oils, setOils] = useState([])


  // the useeffect replaces is lie component did mount beforecomponentdid mount 
  React.useEffect(() => { 
    const getData = async () => {
      try {
        const response = await FindOils.get("/");
        // const response = await FindOils.get("/");
        setOils(response.data.data.oils);
       

        // const data = JSON.parse(window.localStorage.getItem('oils'))
        // if (data) {
        //   console.log("DATA", data)
          // window.localStorage.setItem('oils', JSON.stringify(oils));
          // setOils(data)
          //
      }
      catch (error) {
        console.log("whats wrong", error);
      }
        // window.location = '/';
      } 
      getData()
    },
  [oils]);


  return (
    <OilsContext.Provider value={{ oils, setOils }}>
      {props.children}
    </OilsContext.Provider>
  )
}

// with nothing:
// useEffect(() => {
// })