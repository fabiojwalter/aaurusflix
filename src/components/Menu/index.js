import React from "react";
import Logo from "../../assets/img/logo.png";
import "./Menu.css";
import Button from "../Button"

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AaurusFlix Logo" />
      </a>

      <Button className="ButtonLink" href="/">
        Novo vídeo2
      </Button>
    </nav>
  );
}

export default Menu;
