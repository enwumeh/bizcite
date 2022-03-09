import React, { useState, useEffect } from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails";
import About from "./routes/About";
import Oils from "./components/Oils";
import PageNotFound from "./components/PageNotFound";
import Layout from "./components/Layout";
import { OilsContextProvider } from "./context/OilsContext";
import LandingPage from "./routes/LandingPage";

  //process user in =put and fetch results (which is all product on page. display this result in components page)

const App = () => {

  const search = (e) => {
    console.log(e);
  };

   //should update state with whatever is typed
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <OilsContextProvider>
      <div className="container">
        <Routes>
          <Layout search={search} onChange={onChange}>
            <Route exact path="/" element={<LandingPage />} />
          </Layout>
          <Layout search={search} onChange={onChange}>
            <Route exact path="/home" element={<Home />} />
          </Layout>
          <Layout search={search} onChange={onChange}>
            <Route exact path="/about" element={<About />} />
          </Layout>
          <Layout search={search} onChange={onChange}>
            <Route exact path="/oils" element={<Oils />} />
          </Layout>
          <Layout search={search} onChange={onChange}>
            <Route exact path="/oils/:id" element={<Oildetails />} />
          </Layout>
          <Layout search={search} onChange={onChange}>
            <Route path="*" element={<PageNotFound />} />
          </Layout>
        </Routes>
      </div>
    </OilsContextProvider>
  );
};

export default App;
