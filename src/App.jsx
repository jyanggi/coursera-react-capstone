import HomePage from "./page/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MobileNav from "./components/header/MobileNav";
function App() {
  return (
    <>
      <Header />
      <MobileNav />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
