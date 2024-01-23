import React from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/Search";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
