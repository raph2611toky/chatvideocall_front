import React from "react";
import logo from "../../image/logodark.svg";
import "./NavigationBar.css";

const NavigationBar = () => {
  //ovaina bouton fa lasa misy saut à la ligne
  return (
    <div className="navigationbarcontainer">
      <div className="logo">
        <img src={logo} alt="logo" color="red" />
      </div>
      <div className="browsingSection">
        <div className="nav">ACCEUIL</div>
        <div className="nav">
          <p>COMMENT ÇA MARCHE</p>
        </div>
        <div className="nav">FONCTIONNALITÉS</div>
        <div className="nav">CONTACT</div>
      </div>
      <div className="actionButton">
        <div className="seconnecter">
          <p>Se connecter</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
