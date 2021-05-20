import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails";
import About from "./routes/About";
import Oils from "./components/Oils";
import Layout from "./components/Layout";
import { OilsContextProvider } from "./context/OilsContext";
import LandingPage from "./routes/LandingPage";


const App = () => {

  
  return (
    <OilsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/home">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route exact path="/about">
              <Layout>
                <About/>
              </Layout>
            </Route>
            <Route exact path="/oils">
              <Layout>
                <Oils/>
              </Layout>
            </Route>
            <Route exact path="/oils/:id">
              <Layout>
                <Oildetails />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </div>
    </OilsContextProvider>
  );
  return (
    <React.Fragment>
      <div>
        c
     </div>
    </React.Fragment>
  )
};

export default App;
