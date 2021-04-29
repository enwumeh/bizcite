import React from 'react'
import Home from "./routes/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails"
import UpdateOils from "./routes/UpdateOils"


const App = () => {
  return (
    <div className="container">
        <Router>
          <Switch>
            <Route
            exact path="/"            
            component={Home}
            />
            <Route
              exact
              path="/oils/:id/update"
              component={UpdateOils}
            />
            <Route
              exact
              path="/oils/:id"
              component={Oildetails}
            />
          </Switch>
        </Router>
      </div >
  )
}

export default App


        

