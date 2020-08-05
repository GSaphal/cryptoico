import React from "react";

export default function Sidenav() {
  return (
    <nav className="vertical-social">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-telegram" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-medium" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
