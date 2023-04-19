import HomePage from "./page/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MobileNav from "./components/header/MobileNav";
import ReservationPage from "./page/ReservationPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <MobileNav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />{" "}
      </Router>
    </>
  );
}

export default App;
