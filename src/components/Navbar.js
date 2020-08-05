import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="page-header">
        <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
          <div className="container">
            <a
              className="navbar-brand animated"
              data-animation="fadeInDown"
              data-animation-delay="1s"
              href="#head-area"
            >
              <img src="theme-assets/images/logo.png" alt="Crypto Logo" />
              <span className="brand-text">
                <span className="font-weight-bold">SIMI</span> Crowdsale
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div id="navigation" className="navbar-nav ml-auto">
                <ul className="navbar-nav mt-1">
                  <li
                    className="nav-item animated mt-3"
                    data-animation="fadeInDown"
                    data-animation-delay="1.1s"
                  >
                    <a className="nav-link" href="index.html#about">
                      What is ICO
                    </a>
                  </li>
                  <li
                    className="nav-item animated mt-3"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a className="nav-link" href="index.html#problem-solution">
                      Solutions
                    </a>
                  </li>
                  <li
                    className="nav-item animated mt-3"
                    data-animation="fadeInDown"
                    data-animation-delay="1.3s"
                  >
                    <a className="nav-link" href="index.html#whitepaper">
                      Whitepaper
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.4s"
                  >
                    <a
                      className="nav-link mt-3"
                      href="index.html#token-sale-mobile-app"
                    >
                      Token Sale
                    </a>
                  </li>
                  <li
                    className="nav-item animated mt-3"
                    data-animation="fadeInDown"
                    data-animation-delay="1.5s"
                  >
                    <a className="nav-link" href="index.html#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li
                    className="dropdown show mr-2  mt-3 px-2 animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.6s"
                  >
                    <a
                      className="dropdown-toggle white mt-3"
                      href="#"
                      role="button"
                      id="more"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <div className="dropdown-menu" aria-labelledby="more">
                      <a className="dropdown-item" href="index.html#mobile-app">
                        App
                      </a>
                      <a className="dropdown-item" href="index.html#team">
                        Team
                      </a>
                      <a className="dropdown-item" href="index.html#faq">
                        FAQ
                      </a>
                      <a className="dropdown-item" href="index.html#contact">
                        Contact
                      </a>
                      <a className="dropdown-item" href="template-404.html">
                        404
                      </a>
                      <a
                        className="dropdown-item"
                        href="template-inner-page-with-sidebar.html"
                      >
                        Sample Page
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="float-right nav-link d-flex flex-column mr-4 mt-2"
            style={{ fontSize: "12px", color: "white" }}
          >
            <div>Address: 029dj294ui2nw928hd820dn308</div>
            <div>ETH: 12</div>
            <div>My DC: 1223</div>
          </div>
        </nav>{" "}
      </header>
    );
  }
}
