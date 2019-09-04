import React from "react";
import "./App.css";
import illustration2 from './illustration2.svg'

export default function Objectives() {
  return (
    <section>
      <img className="img-size" src={illustration2} alt=""/>

      <div className="text-align">
        <h1 style={{lineHeight:'1'}}>I am Looking For</h1>
        <h1 style={{lineHeight:'1'}}>Front End Developer Role</h1>

      </div>
    </section>
  );
}
