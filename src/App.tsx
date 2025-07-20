// src/App.tsx
import React from "react";
import Home from "./pages/Home page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PodcastsPage from "./pages/Podcasts page/PodcastsPage";
import NotFound from "./components/NotFound";
const App = (): React.ReactElement => {
  return (
    <div className="bg-black select-none">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
