import React from "react";
import "./navListItem.css";

function NavListItems({ link, name }) {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
}

export default NavListItems;
