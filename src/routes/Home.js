import React from "react";
import Navbar from "../components/Navbar";
import LandingContent from "../components/LandingContent";

export default function Home() {
  return (
    <div className="home-container">
      <div className="landing-container">
        <Navbar />
        <LandingContent />
      </div>
    </div>
  );
}
