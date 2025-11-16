import React from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import MainContent from "./components/Maincontent";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SearchSection />
      <MainContent />
    </div>
  );
};

export default App;
