import React from "react";
const Panel2 = (props) => {
  return (
    <div>
      <li class="navigation__item">
        <a href="/about" class="navigation__link">
          <span>03</span> About
        </a>
      </li>
      <li class="navigation__item" onClick={props.Clicked}>
        <a href="/" class="navigation__link">
          <span>04</span> Logout
        </a>
      </li>
    </div>
  );
};
export default Panel2;
