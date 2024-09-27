import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ResearchSection from "./components/ResearchSection";
import Footer from "./components/Footer";
import TalkToCounsellor from "./components/TalkToCounsellor";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ResearchSection />} />
        </Routes>

      </BrowserRouter>
      {/* <ResearchSection /> */}
      <TalkToCounsellor />
      <Footer />
    </div>
  );
}

export default App;
