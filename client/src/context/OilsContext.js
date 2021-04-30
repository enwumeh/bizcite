import React, { useState, createContext } from 'react';

export const OilsContext = createContext();

export const OilsContextProvider = props => {
  const [oils, setOils] = useState([])



  return (
    <OilsContext.Provider value={{ oils, setOils }}>
      {props.children}
    </OilsContext.Provider>
  )
}
