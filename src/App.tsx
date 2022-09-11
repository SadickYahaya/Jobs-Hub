import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Job from "./Components/JobsSection/Job/Job";
import JobDetails from "./Components/JobsSection/JobDetails/JobDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/view-job/:jobId" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
