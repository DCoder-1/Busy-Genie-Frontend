import React from "react";
import { Link } from "react-router-dom";
const Panel1 = () => {
  return (
    <div>
      <li class="navigation__item">
        <Link to={"/signin"} className="navigation__link">
          <span>03</span> Login
        </Link>
      </li>
      <li class="navigation__item">
        <Link to={"/signup"} className="navigation__link">
          <span>04</span> SignUp
        </Link>
      </li>
    </div>
  );
};
export default Panel1;
