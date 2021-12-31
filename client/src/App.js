import React from "react";
import Home from "./routes/Home";
import { Router, Route } from "react-router-dom";
import Oildetails from "./routes/Oildetails";
import About from "./routes/About";
import Oils from "./components/Oils";
import { OilsContextProvider } from "./context/OilsContext";
import LandingPage from "./routes/LandingPage";

// const App = () => {
//   return (
//     <OilsContextProvider>
//       {/* <Router> */}
//       <Route>
//         <div className="container">
//           <Route exact path="/" element={<LandingPage />} />
//           {/* <LandingPage /> */}
//           <Route exact path="/home" element={<Home />} />
//           <Route exact path="/about" element={<About />} />
//           <Route exact path="/oils" element={<Oils />} />
//           <Route exact path="/oils/:id" element={<Oildetails />} />
//         </div>
//       </Route>
//       {/* </Router> */}
//     </OilsContextProvider>
//   );
// };

const App = () => {
  return (
    <OilsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            {/* <LandingPage /> */}
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/oils" element={<Oils />} />
            <Route exact path="/oils/:id" element={<Oildetails />}/>
          </Routes>
        </Router>
      </div>
    </OilsContextProvider>
  );
};

export default App;
