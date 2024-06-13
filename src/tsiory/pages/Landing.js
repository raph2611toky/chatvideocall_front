import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="generalContainer">
      <NavigationBar />
      <div className="section">ACCEUIL</div>
      <div className="section">FONCTIONNALITÉS</div>
      <div className="section">À PROPOS</div>
      <div className="section">CONTACT</div>
    </div>
  );
};

export default Landing;
