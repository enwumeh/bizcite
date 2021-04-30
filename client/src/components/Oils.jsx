import React, { useEffect } from 'react'
import FindOils from "../APIs/FindOils"
const Oils = () => {

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FindOils.get("/")
        console.log("response should be here", response)
      }
      catch (error) {
        console.log("whats wrong",error)
      }
    };
    getData();
   
  }, []);
  return (
    <div className="oils-main">
      oils component
    </div>
  )
}

export default Oils
