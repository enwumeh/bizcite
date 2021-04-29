import React from 'react'
import Home from "./routes/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails"
import UpdateOils from "./routes/UpdateOils"
import Layout from "./components/Layout"



const App = () => {
  return (
    <div className="container">
        <Router>
          <Switch>
            <Route
            exact path="/">
            <Layout>
              <Home />
              </Layout>
          </Route>
          <Route exact path="/oils/:id/update">
          <Layout>
              <UpdateOils />
            </Layout>
            </Route>
          <Route exact path="/oils/:id">
          <Layout>
              <Oildetails />
            </Layout>
            </Route>
          </Switch>
        </Router>
      </div >
  )
}

export default App


        

