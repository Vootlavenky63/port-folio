import React from "react";
import react from "./react.png";

export default function React1() {
  return (
    <section>
      <div className="flex-div">
        <div>
          <h1 className="main-heading">React</h1>
          <ul style={{paddingTop:"60px"}}>
            <li>
              <h2>All the main React Concepts</h2>
            </li>
            <li>
              <h2>Modern React Hooks</h2>
            </li>
            <li>
              <h2>State management with Redux</h2>
            </li>
            <li>
              <h2>React Router</h2>
            </li>
            <li>
              <h2>React Animation</h2>
            </li>
            <li>
              <h2>100s of Other React Libraries</h2>
            </li>
          </ul>
        </div>

        <img className="img-size" src={react} alt="" />
      </div>
    </section>
  );
}
