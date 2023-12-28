import React from "react";
import Navbar from "../components/Navbar";
import LandingContent from "../components/LandingContent";
import Footer from "../components/Footer";
import Spacing from "../components/Spacing";

export default function Home() {
  return (
    <div className="home-container">
      <div className="landing-container">
        <Navbar />
        <LandingContent />
      </div>
      <Spacing />
      <Footer />
    </div>
  );
}
