import React from "react";
import html from "./html.jpg";
import css from "./css.png";
import js from "./js.png";

export default function Skils() {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "0 0 24px 0" }}>Skills</h1>
      <div className="card-container">
        <div className="card">
          <img src={html} alt="" style={{ height: "60%" }} />
          <div style={{ backgroundColor: "#cacae8" }}>
            <h4> hype text marckup language hype text marckup language</h4>
          </div>
        </div>
        <div className="card">
          <img src={css} alt="" style={{ height: "60%" }} />
          <div style={{ backgroundColor: "#cacae8" }}>
            <h4> hype text marckup language hype text marckup language</h4>
          </div>
        </div>
        <div className="card">
          <img src={js} alt="" style={{ height: "60%" }} />
          <div style={{ backgroundColor: "#cacae8" }}>
            <h4> hype text marckup language hype text marckup language</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
