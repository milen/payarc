import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Clock from "./Components/Clock/Clock";
import Home from "./Views/Home/Home";
import Training from "./Views/Training/Training";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div id="main-wrapper" className="row">
        <Navigation />

        <main id="main" className="container">
          <div className="d-flex justify-content-end flex-wrap flex-md-nowrap pt-3 pb-2 mb-3">
            <Clock />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
