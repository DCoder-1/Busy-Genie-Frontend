import React from "react";
import { Link } from "react-router-dom";
const Panel2 = (props) => {
  return (
    <div>
      <li class="navigation__item">
        <Link to={"/about"} class="navigation__link">
          <span>03</span> About
        </Link>
      </li>
      <li class="navigation__item" onClick={props.Clicked}>
        <Link to={"/"} className="navigation__link">
          <span>04</span> Logout
        </Link>
      </li>
    </div>
  );
};
export default Panel2;
