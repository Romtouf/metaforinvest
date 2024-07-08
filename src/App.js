import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);

  return (
    <Router>
      <div className="App">
        <Navbar
          onLoginClick={toggleLoginModal}
          onSignupClick={toggleSignupModal}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {showLoginModal && <LoginModal onClose={toggleLoginModal} />}
        {showSignupModal && <SignupModal onClose={toggleSignupModal} />}
      </div>
    </Router>
  );
}

export default App;
