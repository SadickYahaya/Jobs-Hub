import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobsSection/JobDetails/JobDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/view-job" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
