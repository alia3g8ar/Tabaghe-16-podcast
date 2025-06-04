// src/App.tsx
import React from "react";
import Home from "./pages/Home page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcasts from "./pages/Podcasts/Podcasts";
const App = (): React.ReactElement => {
  return (
    <div className="bg-black select-none">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
