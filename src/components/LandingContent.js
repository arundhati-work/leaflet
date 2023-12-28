import React from "react";
import "../styles/LandingContent.css";

export default function LandingContent() {
  return (
    <div className="landing-content-container">
      <div className="landing-inner-container">
        <h1>Start your plant journey today</h1>
        <p>
          Subscribe to our newsletter to receive tips and information about
          gardening. Also discounts on our products and more...
        </p>
        <button>SUBSCRIBE</button>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}
