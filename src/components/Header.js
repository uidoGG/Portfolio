import React from "react";
import "../Styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to={"/Home"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Projects"}>Projects</Link>
      <Link to={"/Resume"}>Resume</Link>
    </header>
  );
};

export default Header;
