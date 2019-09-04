import React from "react";
import "./App.css";
import illustration from "./illustration.svg";

export default function Hero() {
  return (
    <section>
      <div className="flex-div">
        <div>
          <h1 className="main-heading">Hi,</h1>
          <h1 className="main-heading">I am Venkatesh</h1>
          <h2>A Front End Developer</h2>
          <button className="btn"><h2>Download Resume</h2></button>
        </div>

          <img className="img-size" src={illustration} alt="" />

      </div>
    </section>
  );
}
