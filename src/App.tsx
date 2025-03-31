// src/App.tsx
import React from "react";
import Navbar from "./components/Home page/Header/Navbar";
import Main from "./components/Home page/Header/Main";

// کامپوننت اصلی برنامه
const App = (): React.ReactElement => {
  return (
    <div className="bg-black">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
