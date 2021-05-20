import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails";
import About from "./routes/About";
import Oils from "./components/Oils";
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
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/oils">
              <Oils />
            </Route>
            <Route exact path="/oils/:id">
                <Oildetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </OilsContextProvider>
  );
};

export default App;
