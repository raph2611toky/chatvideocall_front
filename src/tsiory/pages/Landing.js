import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Landing.css";
import RightNavigation from "../components/RightNavigation";

const Landing = () => {
  return (
    <div className="generalContainer">
      <NavigationBar />
      <div className="section">ACCEUIL</div>
      <div className="section">FONCTIONNALITÉS</div>
      <div className="section">À PROPOS</div>
      <div className="section">CONTACT</div>
      <RightNavigation />
    </div>
  );
};

export default Landing;
