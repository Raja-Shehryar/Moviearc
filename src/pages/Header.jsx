import React from "react";
import NavListItems from "../components/NavListItems";
import navListData from "../data/NavListData";
import "./header.css";
import Search from "../components/Search";
import Button from "../components/Button";
function Header() {
  return (
    <header>
      <a href="/" className="logo">
        cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItems
            key={nav._id}
            nav={nav}
            link={nav.link}
            name={nav.name}
          />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign in"
      />
    </header>
  );
}

export default Header;
