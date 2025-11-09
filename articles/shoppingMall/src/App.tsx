import React from "react";
import Header from "./components/Header.tsx";
import SearchSection from "./components/SearchSection.tsx";
import MainContent from "./components/Maincontent.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <SearchSection />
      <MainContent />
    </div>
  );
};

export default App;
